import { APP_CONFIG } from '../core/Config.js';

/**
 * UIController.js
 * Handles DOM Events, Buttons, Laser animation, and Texture toggling.
 * (Single Responsibility Principle & Dependency Inversion)
 */
export class UIController {
  constructor(canModel, audioService, eventBus, textures) {
    this.canModel = canModel;
    this.audioService = audioService;
    this.eventBus = eventBus;
    this.textures = textures;

    this.isCoke = true;
    this.laserElement = document.getElementById('laser');
    this.toggleButton = document.getElementById('toggle-texture');
    this.scanButton = document.getElementById('scan-trigger');

    this.bindEvents();
  }

  bindEvents() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => this.toggleTexture());
    }

    if (this.scanButton) {
      this.scanButton.addEventListener('click', () => this.triggerScanEffect());
    }

    this.eventBus.on('scan:enter', () => this.triggerScanEffect());
  }

  toggleTexture() {
    this.isCoke = !this.isCoke;
    const targetTexture = this.isCoke ? this.textures.coke : this.textures.silencio;
    const pbr = this.isCoke
      ? APP_CONFIG.PBR_MATERIALS.CAN_BODY_COKE
      : APP_CONFIG.PBR_MATERIALS.CAN_BODY_SILENCIO;

    this.canModel.setTexture(targetTexture, pbr);
  }

  triggerScanEffect() {
    if (this.laserElement) {
      this.laserElement.style.top = '50%';
      this.laserElement.classList.add('active');

      setTimeout(() => {
        this.laserElement.classList.remove('active');
      }, 600);
    }

    this.audioService.play();
  }
}
