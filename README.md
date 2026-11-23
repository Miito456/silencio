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

## 🗂️ Estructura de Archivos

```text
Silencio/
├── index.html                   # Sitio web de Silencio.es (Supermercado Digital)
├── coca-cola-scroll.html        # Demostración del Scroll 3D Dinámico con lata de Coca-Cola
├── test_suite.py                # Suite de pruebas automatizada de recursos del servidor
├── studio_small_09_1k_low.hdr   # Mapa de iluminación HDRI para Three.js
├── assets/
│   ├── index-964e5b23.css       # Hoja de estilos original con layout y tipografías
│   └── index-5f9b5534.js        # Script de Three.js, React-Three-Fiber e interactividad
├── fonts/                       # Tipografías oficiales Neue Haas Grotesk y PT Mono
│   ├── NeueHaasGrotDispRound-55Roman-Web.woff2
│   ├── NeueHaasGrotDispRound-35Thin-Web.woff2
│   └── PTMono-Regular.ttf
├── img/                         # Gráficos vectoriales, texturas y fotografías
│   ├── coca_cola_wrap.jpg       # Textura cilíndrica de Coca-Cola
│   ├── barcode.svg, fire.svg... # Iconografía original
│   └── *.jpg                    # Fotos de producto y editorial
├── models/                      # Modelos 3D GLTF (.glb)
│   ├── basket_c.glb             # Cesta de supermercado
│   ├── can_silencio_c.glb       # Lata 330ml (#01 Digital Branding)
│   ├── bolsa_silencio_c.glb     # Bolsa de snacks (#02 Visual Languages)
│   ├── zumo_silencio_c.glb      # Brick 200ml (#03 Interactive Websites)
│   └── chocolatina_silencio_c.glb # Chocolatina (#04 Disruptive Comm.)
├── audio/                       # Efectos de sonido
│   ├── beep.mp3                 # Sonido de escáner láser de caja registradora
│   ├── print1.2.mp3             # Sonido de máquina impresora de tickets
│   └── print2.1.mp3             # Sonido secundario de caja
├── tokens.css                   # Tokens de diseño (colores, tipografía y espaciados)
├── STYLE_GUIDE.md               # Guía y especificación del sistema de diseño
└── package.json                 # Scripts de ejecución
```

---

## 🚀 Cómo Ejecutar en Local

Dado que el proyecto utiliza WebGL, modelos 3D (`.glb`), audios y mapas HDR, debe ejecutarse mediante un servidor HTTP local:

### Con Python (recomendado):
```powershell
python -m http.server 3000
```

Luego abre en tu navegador:
* **`http://localhost:3000`** &rarr; Sitio completo de Silencio.es (*haz clic en «Click to enter!» para desbloquear el scroll*).
* **`http://localhost:3000/coca-cola-scroll.html`** &rarr; Demostración del Scroll Dinámico 3D con la lata de Coca-Cola.

### Ejecutar Suite de Pruebas:
```powershell
python test_suite.py
# o con npm:
npm test
```

---

## ⚖️ Licencia y Créditos

* **Diseño original, concepto y activos:** © [Silencio Studio](https://silencio.es/) — Todos los derechos reservados.
* **Propósito del código:** Educativo y demostrativo.
