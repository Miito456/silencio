import { APP_CONFIG } from '../core/Config.js';

/**
 * SceneManager.js
 * Manages Three.js Scene, Camera, Lights, and Render Loop.
 * (Single Responsibility Principle - SRP)
 */
export class SceneManager {
  constructor(canvasElement) {
    if (!canvasElement) {
      throw new Error('SceneManager requires a valid HTML Canvas element.');
    }
    this.canvas = canvasElement;
    this.scene = new THREE.Scene();
    this.isRunning = false;

    this.initCamera();
    this.initRenderer();
    this.initLights();
    this.bindEvents();
  }

  initCamera() {
    const { FOV, NEAR, FAR, INITIAL_POSITION } = APP_CONFIG.CAMERA;
    this.camera = new THREE.PerspectiveCamera(
      FOV,
      window.innerWidth / window.innerHeight,
      NEAR,
      FAR
    );
    this.camera.position.set(INITIAL_POSITION.x, INITIAL_POSITION.y, INITIAL_POSITION.z);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
  }

  initLights() {
    const { AMBIENT_COLOR, AMBIENT_INTENSITY, KEY_LIGHT, FILL_LIGHT, RIM_LIGHT } = APP_CONFIG.LIGHTING;

    const ambient = new THREE.AmbientLight(AMBIENT_COLOR, AMBIENT_INTENSITY);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(KEY_LIGHT.color, KEY_LIGHT.intensity);
    key.position.set(...KEY_LIGHT.position);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(FILL_LIGHT.color, FILL_LIGHT.intensity);
    fill.position.set(...FILL_LIGHT.position);
    this.scene.add(fill);

    const rim = new THREE.DirectionalLight(RIM_LIGHT.color, RIM_LIGHT.intensity);
    rim.position.set(...RIM_LIGHT.position);
    this.scene.add(rim);
  }

  bindEvents() {
    this.onWindowResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', this.onWindowResize);
  }

  add(object) {
    this.scene.add(object);
  }

  remove(object) {
    this.scene.remove(object);
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    const loop = () => {
      if (!this.isRunning) return;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  stop() {
    this.isRunning = false;
  }

  destroy() {
    this.stop();
    window.removeEventListener('resize', this.onWindowResize);
    this.renderer.dispose();
  }
}
