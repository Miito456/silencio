/**
 * ModelLoaderService.js
 * Asynchronous 3D Asset and Texture Loader utilizing Promises.
 * (Single Responsibility Principle - SRP & Open/Closed Principle - OCP)
 */
export class ModelLoaderService {
  constructor() {
    if (typeof THREE === 'undefined') {
      throw new Error('Three.js must be loaded before ModelLoaderService.');
    }
    this.textureLoader = new THREE.TextureLoader();
    this.gltfLoader = new THREE.GLTFLoader();
    this.cache = new Map();
  }

  /**
   * Loads a texture with optional configuration
   * @param {string} url
   * @param {boolean} flipY
   * @returns {Promise<THREE.Texture>}
   */
  loadTexture(url, flipY = false) {
    if (this.cache.has(url)) {
      return Promise.resolve(this.cache.get(url));
    }

    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        url,
        (texture) => {
          texture.flipY = flipY;
          this.cache.set(url, texture);
          resolve(texture);
        },
        undefined,
        (error) => reject(new Error(`Failed to load texture at ${url}: ${error.message}`))
      );
    });
  }

  /**
   * Loads a GLTF / GLB 3D model
   * @param {string} url
   * @returns {Promise<THREE.GLTF>}
   */
  loadGLTF(url) {
    if (this.cache.has(url)) {
      return Promise.resolve(this.cache.get(url));
    }

    return new Promise((resolve, reject) => {
      this.gltfLoader.load(
        url,
        (gltf) => {
          this.cache.set(url, gltf);
          resolve(gltf);
        },
        undefined,
        (error) => reject(new Error(`Failed to load GLTF model at ${url}: ${error.message}`))
      );
    });
  }
}
