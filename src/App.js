import { APP_CONFIG } from './core/Config.js';
import { EventBus } from './core/EventBus.js';
import { AudioService } from './services/AudioService.js';
import { ModelLoaderService } from './services/ModelLoaderService.js';
import { TelemetryService } from './services/TelemetryService.js';
import { SceneManager } from './graphics/SceneManager.js';
import { CanProductModel } from './graphics/CanProductModel.js';
import { ScrollAnimator } from './animation/ScrollAnimator.js';
import { UIController } from './ui/UIController.js';

/**
 * App.js
 * Composition Root & Orchestrator.
 * Adheres to Dependency Inversion Principle (DIP) and Clean Architecture.
 */
class Application {
  constructor() {
    this.eventBus = new EventBus();
    this.audioService = new AudioService(APP_CONFIG.PATHS.AUDIO_BEEP);
    this.loaderService = new ModelLoaderService();
    this.telemetryService = new TelemetryService(this.eventBus);
    this.sceneManager = null;
    this.canProductModel = null;
    this.scrollAnimator = null;
    this.uiController = null;
  }

  async init() {
    try {
      console.log('Initializing 3D Application with Clean Architecture...');
      
      // 1. Initialize SceneManager
      const canvas = document.getElementById(APP_CONFIG.CANVAS_ID);
      this.sceneManager = new SceneManager(canvas);

      // 2. Load 3D model and textures asynchronously in parallel
      const [cokeTexture, canGltf] = await Promise.all([
        this.loaderService.loadTexture(APP_CONFIG.PATHS.TEXTURE_COKE, false),
        this.loaderService.loadGLTF(APP_CONFIG.PATHS.MODEL_CAN)
      ]);

      // 3. Create Can Product Entity
      this.canProductModel = new CanProductModel(canGltf, cokeTexture);
      this.sceneManager.add(this.canProductModel.getGroup());

      // 4. Initialize GSAP Scroll Animation
      this.scrollAnimator = new ScrollAnimator(this.canProductModel, this.eventBus);

      // 5. Initialize UI Controller with injected dependencies
      this.uiController = new UIController(
        this.canProductModel,
        this.audioService,
        this.eventBus,
        {
          coke: cokeTexture,
          silencio: this.canProductModel.originalTexture
        }
      );

      // 6. Start Three.js Rendering Loop
      this.sceneManager.start();
      console.log('Application running smoothly.');

    } catch (error) {
      console.error('Fatal initialization error:', error);
    }
  }
}

// Bootstrap application on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();
  app.init();
});
