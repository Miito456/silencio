// SILENCIO — Vitrine Interactivity
document.addEventListener('DOMContentLoaded', () => {
  const inspector = document.getElementById('inspector');
  const closeBtn = document.getElementById('close-inspector');
  const panelImage = document.getElementById('panel-image');
  const panelTitle = document.getElementById('panel-title');
  const panelCat = document.getElementById('panel-cat');
  const panelMaterial = document.getElementById('panel-material');
  const panelDims = document.getElementById('panel-dims');
  const panelProvenance = document.getElementById('panel-provenance');
  const panelDesc = document.getElementById('panel-desc');
  const panelAccession = document.getElementById('panel-accession');

  const items = document.querySelectorAll('.vitrine-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const name = item.dataset.name;
      const material = item.dataset.material;
      const dims = item.dataset.dims;
      const edition = item.dataset.edition;
      const provenance = item.dataset.provenance;
      const desc = item.dataset.desc;
      const img = item.querySelector('img').getAttribute('src');

      panelTitle.textContent = name;
      panelCat.textContent = `ACCESSION: ${id} · EDITION: ${edition}`;
      panelMaterial.textContent = material;
      panelDims.textContent = dims;
      panelProvenance.textContent = provenance;
      panelDesc.textContent = desc;
      panelImage.src = img;
      panelAccession.textContent = `ACCESSION RECORD // ${id}`;

      inspector.classList.add('is-active');
    });
  });

  closeBtn.addEventListener('click', () => {
    inspector.classList.remove('is-active');
  });

  // Close inspector on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && inspector.classList.contains('is-active')) {
      inspector.classList.remove('is-active');
    }
  });
});
