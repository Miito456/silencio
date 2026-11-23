import urllib.request, threading, time, http.server, socketserver, os

PORT = 9988
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass

httpd = socketserver.TCPServer(('127.0.0.1', PORT), QuietHandler)
t = threading.Thread(target=httpd.serve_forever, daemon=True)
t.start()
time.sleep(0.5)

endpoints = [
    # Páginas principales
    ('/', 'Página Principal Silencio'),
    ('/index.html', 'HTML Silencio'),
    ('/coca-cola-scroll.html', 'Demo Coca-Cola 3D Scroll'),
    # Archivo clave que antes daba 404
    ('/studio_small_09_1k_low.hdr', 'Iluminación HDR Three.js'),
    # Modelos 3D GLTF (.glb)
    ('/can_silencio_c.glb', 'Modelo 3D Lata'),
    ('/bolsa_silencio_c.glb', 'Modelo 3D Bolsa'),
    ('/zumo_silencio_c.glb', 'Modelo 3D Brick'),
    ('/chocolatina_silencio_c.glb', 'Modelo 3D Chocolatina'),
    ('/basket_c.glb', 'Modelo 3D Cesta Supermercado'),
    # Efectos de audio
    ('/beep.mp3', 'Sonido Escáner Beep'),
    ('/print1.2.mp3', 'Sonido Impresión Ticket 1'),
    ('/print2.1.mp3', 'Sonido Impresión Ticket 2'),
    # Texturas y fotos
    ('/img/coca_cola_wrap.jpg', 'Textura Mapeada Coca-Cola'),
    ('/img/coca_cola_front.jpg', 'Foto Frontal Coca-Cola'),
    ('/img/coca_cola_tilted.jpg', 'Foto Inclinada Coca-Cola'),
    ('/img/barcode.svg', 'SVG Código de Barras'),
    ('/img/fire.svg', 'SVG Fuego'),
    ('/img/termo.svg', 'SVG Termo'),
    ('/img/boring.svg', 'SVG Boring'),
    # Assets CSS y JS del bundle
    ('/assets/index-964e5b23.css', 'CSS Bundle Silencio'),
    ('/assets/index-5f9b5534.js', 'JS Bundle Silencio (React+Three)'),
    # Módulos Clean Architecture (SOLID)
    ('/src/App.js', 'Clean Arch: App.js (Composition Root)'),
    ('/src/core/Config.js', 'Clean Arch: Config.js (Constants)'),
    ('/src/core/EventBus.js', 'Clean Arch: EventBus.js (Pub/Sub)'),
    ('/src/services/AudioService.js', 'Clean Arch: AudioService.js (SRP)'),
    ('/src/services/ModelLoaderService.js', 'Clean Arch: ModelLoaderService.js (SRP)'),
    ('/src/services/TelemetryService.js', 'Clean Arch: TelemetryService.js (SRP)'),
    ('/src/graphics/SceneManager.js', 'Clean Arch: SceneManager.js (SRP)'),
    ('/src/graphics/CanProductModel.js', 'Clean Arch: CanProductModel.js (SRP/OCP)'),
    ('/src/animation/ScrollAnimator.js', 'Clean Arch: ScrollAnimator.js (SRP)'),
    ('/src/ui/UIController.js', 'Clean Arch: UIController.js (SRP/DIP)'),
    # Fuentes
    ('/fonts/NeueHaasGrotDispRound-55Roman-Web.woff2', 'Fuente Haas 55 Roman'),
    ('/fonts/NeueHaasGrotDispRound-35Thin-Web.woff2', 'Fuente Haas 35 Thin'),
    ('/fonts/PTMono-Regular.ttf', 'Fuente PT Mono')
]

print('=' * 75)
print('INICIANDO SUITE DE PRUEBAS DE SERVIDOR Y RECURSOS')
print('=' * 75)

all_passed = True
for ep, desc in endpoints:
    url = f'http://127.0.0.1:{PORT}{ep}'
    try:
        req = urllib.request.urlopen(url, timeout=3)
        status = req.status
        size = len(req.read())
        print(f'[✓ PASSED] {desc:<30} {ep:<36} Status: {status} ({size:,} B)')
    except Exception as e:
        all_passed = False
        print(f'[✗ FAILED] {desc:<30} {ep:<36} ERROR: {e}')

httpd.shutdown()
print('=' * 75)
if all_passed:
    print(f'RESULTADO FINAL: TODAS LAS PRUEBAS ({len(endpoints)}/{len(endpoints)}) PASARON EXITOSAMENTE (0 ERRORES 404)')
else:
    print('RESULTADO FINAL: SE ENCONTRARON FALLOS')
print('=' * 75)
