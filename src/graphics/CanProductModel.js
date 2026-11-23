import { APP_CONFIG } from '../core/Config.js';

/**
 * CanProductModel.js
 * Domain Entity representing the 3D Can Product.
 * (Single Responsibility & Open/Closed Principle)
 */
export class CanProductModel {
  constructor(gltfModel, initialTexture) {
    this.group = new THREE.Group();
    this.bodyMesh = null;
    this.originalTexture = null;
    this.currentTexture = initialTexture;

    this.initModel(gltfModel, initialTexture);
  }

  initModel(gltf, texture) {
    const model = gltf.scene;
    const scale = APP_CONFIG.ANIMATION.MODEL_SCALE;
    model.scale.set(scale, scale, scale);

    model.traverse((child) => {
      if (!child.isMesh) return;

      if (child.material && child.material.name === 'Mat.003') {
        // Can cylindrical body label
        this.bodyMesh = child;
        this.originalTexture = child.material.map;

        child.material.map = texture;
        const pbr = APP_CONFIG.PBR_MATERIALS.CAN_BODY_COKE;
        child.material.metalness = pbr.metalness;
        child.material.roughness = pbr.roughness;
        child.material.needsUpdate = true;
      } else if (child.material) {
        // Can aluminum lid and bottom
        const pbr = APP_CONFIG.PBR_MATERIALS.CAN_ALUMINUM_LID;
        child.material.metalness = pbr.metalness;
        child.material.roughness = pbr.roughness;
      }
    });

    this.group.add(model);
  }

  /**
   * Swaps the label texture dynamically
   * @param {THREE.Texture} newTexture
   * @param {{ metalness: number, roughness: number }} pbrSettings
   */
  setTexture(newTexture, pbrSettings) {
    if (!this.bodyMesh) return;

    this.bodyMesh.material.map = newTexture;
    if (pbrSettings) {
      this.bodyMesh.material.metalness = pbrSettings.metalness;
      this.bodyMesh.material.roughness = pbrSettings.roughness;
    }
    this.bodyMesh.material.needsUpdate = true;
  }

  getGroup() {
    return this.group;
  }
}
