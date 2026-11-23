/**
 * Config.js
 * Centralized Application Configuration & Constants (Clean Code - No Magic Numbers)
 */
export const APP_CONFIG = {
  CANVAS_ID: 'webgl-canvas',
  
  PATHS: {
    MODEL_CAN: 'can_silencio_c.glb',
    TEXTURE_COKE: 'img/coca_cola_wrap.jpg',
    AUDIO_BEEP: 'beep.mp3'
  },

  CAMERA: {
    FOV: 45,
    NEAR: 0.1,
    FAR: 100,
    INITIAL_POSITION: { x: 0, y: 0, z: 8 }
  },

  LIGHTING: {
    AMBIENT_COLOR: 0xffffff,
    AMBIENT_INTENSITY: 1.2,
    KEY_LIGHT: { color: 0xffffff, intensity: 2.5, position: [5, 8, 5] },
    FILL_LIGHT: { color: 0xffffff, intensity: 1.5, position: [-5, 0, 5] },
    RIM_LIGHT: { color: 0xffffff, intensity: 2.0, position: [0, -5, -3] }
  },

  PBR_MATERIALS: {
    CAN_BODY_COKE: { metalness: 0.55, roughness: 0.22 },
    CAN_BODY_SILENCIO: { metalness: 0.20, roughness: 0.40 },
    CAN_ALUMINUM_LID: { metalness: 0.95, roughness: 0.15 }
  },

  ANIMATION: {
    SCRUB_SMOOTHNESS: 0.4,
    MODEL_SCALE: 0.65
  }
};
