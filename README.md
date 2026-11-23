# SILENCIO ® — Visual Languages & 3D Dynamic Scroll Showcase

> **⚠️ AVISO DE ATRIBUCIÓN Y DERECHOS DE AUTOR / DISCLAIMER:**  
> Este proyecto es un estudio de desarrollo web y demostración técnica **inspirado íntegramente en el sitio web oficial de [SILENCIO ® (https://silencio.es/)](https://silencio.es/)**.  
> **Todos los derechos reservados pertenecen exclusiva e inequívocamente a Silencio Studio ([silencio.es](https://silencio.es/))**.  
> El concepto creativo, la identidad de marca, el diseño gráfico, los modelos 3D y los activos originales son propiedad de sus respectivos autores. Este repositorio tiene un propósito puramente educativo, formativo y de demostración técnica sin fines comerciales.

---

## 📦 Contenido del Proyecto

1. **Reconstrucción Completa de Silencio.es (`index.html`)**
   - El concepto original de *Digital Products Self-Service Store 24H*.
   - Los modelos 3D GLTF de los productos (lata de 330ml, bolsa de snacks, brick de zumo, chocolatina y cesta de la compra).
   - El ticket de compra interactivo, códigos de barras con lectura láser y efectos de sonido de caja registradora (`beep.mp3` y `print.mp3`).
   - Mapa de iluminación ambiental HDRI (`studio_small_09_1k_low.hdr`).

2. **Demostración de Scroll 3D Dinámico (`coca-cola-scroll.html`)**
   - Recreación del efecto de scroll cinemático utilizando una lata 3D texturizada con la gráfica de Coca-Cola.
   - Vinculación directa con **GSAP ScrollTrigger**: a medida que se hace scroll, la lata desciende, rota 360° en 3D, se inclina a 35° en perspectiva y activa el escáner láser al llegar a la última sección.
   - Panel de telemetría en tiempo real (porcentaje de scroll, posición Y, rotación Z/Y).
   - Botón interactivo para alternar entre la textura de Coca-Cola y la versión monocromática de Silencio.

3. **Suite de Pruebas Automatizada (`test_suite.py`)**
   - Script de prueba que valida la disponibilidad de los 24 recursos esenciales (páginas, modelos 3D, audios, fuentes y mapas HDR) garantizando 0 errores 404.

---

## 🗂️ Estructura de Archivos y Arquitectura Limpia (SOLID)

El código interactivo de la demostración 3D ha sido desacoplado y estructurado siguiendo **Clean Architecture**, **Clean Code** y los principios **SOLID**:

```text
Silencio/
├── index.html                   # Sitio web de Silencio.es (Supermercado Digital)
├── coca-cola-scroll.html        # Demostración del Scroll 3D Dinámico con lata de Coca-Cola
├── test_suite.py                # Suite de pruebas automatizada de recursos del servidor
├── studio_small_09_1k_low.hdr   # Mapa de iluminación HDRI para Three.js
├── src/                         # Código modular desacoplado (Clean Architecture)
│   ├── App.js                   # Composition Root & Bootstrap (Dependency Inversion)
│   ├── core/
│   │   ├── Config.js            # Constantes y configuraciones centralizadas (No magic numbers)
│   │   └── EventBus.js          # Patrón Pub/Sub para comunicación desacoplada
│   ├── services/
│   │   ├── AudioService.js      # Servicio de audio y reproducción segura (SRP)
│   │   ├── ModelLoaderService.js# Cargador asíncrono de modelos GLTF y texturas con Promesas (SRP)
│   │   └── TelemetryService.js  # Actualización de telemetría en el DOM sin thrashing (SRP)
│   ├── graphics/
│   │   ├── SceneManager.js      # Gestión de Three.js (Scene, Camera, Lights, Resize, Render Loop) (SRP)
│   │   └── CanProductModel.js   # Entidad 3D de la lata (materiales PBR, cambio de textura) (OCP)
│   ├── animation/
│   │   └── ScrollAnimator.js    # Controlador de GSAP ScrollTrigger y cinemática (SRP)
│   └── ui/
│       └── UIController.js      # Manejador de eventos del DOM y botones (SRP/DIP)
├── assets/
│   ├── index-964e5b23.css       # Hoja de estilos original con layout y tipografías
│   └── index-5f9b5534.js        # Script original compilado de Silencio.es
├── fonts/                       # Tipografías oficiales Neue Haas Grotesk y PT Mono
├── img/                         # Gráficos vectoriales, texturas y fotografías
├── models/                      # Modelos 3D GLTF (.glb)
├── audio/                       # Efectos de sonido
└── package.json                 # Scripts de ejecución
```

### Principios SOLID Aplicados:
* **Single Responsibility Principle (SRP):** Cada clase posee una única responsabilidad bien definida (`SceneManager` solo maneja Three.js, `ModelLoaderService` solo carga assets, `AudioService` solo reproduce sonido, etc.).
* **Open/Closed Principle (OCP):** La entidad `CanProductModel` permite intercambiar o añadir nuevas marcas y texturas (Coca-Cola, Silencio, etc.) mediante métodos abiertos a extensión sin modificar el renderizador.
* **Liskov Substitution Principle (LSP):** Servicios reemplazables sin romper el comportamiento del orquestador.
* **Interface Segregation Principle (ISP):** Módulos desacoplados que solo exponen los métodos requeridos por sus consumidores.
* **Dependency Inversion Principle (DIP):** El orquestador `App.js` inyecta las dependencias necesarias a los controladores en el *Composition Root*.

## ⚖️ Licencia y Créditos

* **Diseño original, concepto y activos:** © [Silencio Studio](https://silencio.es/) — Todos los derechos reservados.
* **Propósito del código:** Educativo y demostrativo.
