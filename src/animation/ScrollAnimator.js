import { APP_CONFIG } from '../core/Config.js';

/**
 * ScrollAnimator.js
 * Synchronizes GSAP ScrollTrigger with the 3D Can model.
 * (Single Responsibility Principle & Open/Closed Principle)
 */
export class ScrollAnimator {
  constructor(canProductModel, eventBus) {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      throw new Error('GSAP and ScrollTrigger must be loaded.');
    }
    this.modelGroup = canProductModel.getGroup();
    this.eventBus = eventBus;

    this.initTimeline();
  }

  initTimeline() {
    // Initial positioning
    this.modelGroup.position.set(1.5, 0.2, 0);
    this.modelGroup.rotation.set(0.1, -0.4, -0.05);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: APP_CONFIG.ANIMATION.SCRUB_SMOOTHNESS,
        onUpdate: (self) => {
          this.eventBus.emit('scroll:telemetry', {
            progress: self.progress,
            positionY: this.modelGroup.position.y,
            rotationY: this.modelGroup.rotation.y,
            tiltZ: this.modelGroup.rotation.z
          });
        }
      }
    });

    // Stage 1: Descent, 360° rotation, and perspective tilt
    timeline.to(this.modelGroup.position, {
      x: 1.8,
      y: -0.6,
      z: 0.5,
      duration: 1
    }, 0);

    timeline.to(this.modelGroup.rotation, {
      x: 0.35,
      y: Math.PI * 2 + 0.5,
      z: -0.55, // 35° tilt
      duration: 1
    }, 0);

    // Stage 2: Lateral translation to left for nutritional table
    timeline.to(this.modelGroup.position, {
      x: -1.6,
      y: -0.3,
      z: 1.0,
      duration: 1
    }, 1);

    timeline.to(this.modelGroup.rotation, {
      x: -0.2,
      y: Math.PI * 4,
      z: 0.4,
      duration: 1
    }, 1);

    // Stage 3: Centering for checkout laser scanning
    timeline.to(this.modelGroup.position, {
      x: 0,
      y: 0.5,
      z: 1.8,
      duration: 1
    }, 2);

    timeline.to(this.modelGroup.rotation, {
      x: 0,
      y: Math.PI * 5,
      z: 0,
      duration: 1
    }, 2);

    // Checkout arrival trigger
    ScrollTrigger.create({
      trigger: '#sec-4',
      start: 'top 60%',
      onEnter: () => this.eventBus.emit('scan:enter')
    });
  }
}
