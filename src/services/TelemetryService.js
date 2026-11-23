/**
 * TelemetryService.js
 * Updates DOM Telemetry cleanly based on EventBus updates.
 * (Single Responsibility Principle & Separation of Concerns)
 */
export class TelemetryService {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this.elScroll = document.getElementById('tel-scroll');
    this.elY = document.getElementById('tel-y');
    this.elRot = document.getElementById('tel-rot');
    this.elTilt = document.getElementById('tel-tilt');

    this.init();
  }

  init() {
    this.eventBus.on('scroll:telemetry', (data) => this.update(data));
  }

  update({ progress, positionY, rotationY, tiltZ }) {
    if (this.elScroll) {
      this.elScroll.textContent = `${Math.round(progress * 100)}%`;
    }
    if (this.elY) {
      this.elY.textContent = positionY.toFixed(2);
    }
    if (this.elRot) {
      const degreesY = Math.round((rotationY * 180 / Math.PI) % 360);
      this.elRot.textContent = `${degreesY}°`;
    }
    if (this.elTilt) {
      const degreesZ = Math.round(tiltZ * 180 / Math.PI);
      this.elTilt.textContent = `${degreesZ}°`;
    }
  }
}
