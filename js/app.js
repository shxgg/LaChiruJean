/* Navegación y arranque. Router por hash (#/ventas): funciona en GitHub Pages y abriendo el archivo directo.
   Los módulos con enabled:false (config.js) se muestran deshabilitados y no tienen pantalla. */
(function () {
  const { $, $$, icon, esc, toast, loading } = LC.ui;
  const mods = LC.config.modules;
  const enabled = mods.filter(m => m.enabled);

  function buildNav() {
    const item = m => m.enabled
      ? `<a class="nav-item" href="#/${m.key}" data-key="${m.key}">${icon(m.icon)}<span>${esc(m.label)}</span></a>`
      : `<button class="nav-item off" data-off="${esc(m.label)}" aria-disabled="true" title="Módulo previsto, todavía no disponible">${icon(m.icon)}<span>${esc(m.label)}</span><em>Próximamente</em></button>`;
    $('#nav').innerHTML = enabled.map(item).join('') + '<div class="nav-sep">Módulos previstos</div>' + mods.filter(m => !m.enabled).map(item).join('');
    $('#bottombar').innerHTML = mods.filter(m => m.quick).map(m => `<a href="#/${m.key}" data-key="${m.key}">${icon(m.icon)}<span>${esc(m.label)}</span></a>`).join('') +
      `<button id="moreBtn" aria-label="Más módulos">${icon('more')}<span>Más</span></button>`;
    $('#menuBtn').innerHTML = icon('menu');
    $$('[data-off]').forEach(b => b.addEventListener('click', () => toast(`${b.dataset.off} está previsto pero todavía no está activo.`, 'info')));
  }

  const setDrawer = open => document.body.classList.toggle('drawer-open', open);

  async function route() {
    const key = (location.hash.replace(/^#\//, '') || 'dashboard').split('?')[0];
    const mod = enabled.find(m => m.key === key) || enabled[0];
    $$('[data-key]').forEach(a => a.classList.toggle('active', a.dataset.key === mod.key));
    $('#pageTitle').textContent = mod.label;
    document.title = `${mod.label} · ${LC.config.brand}`;
    setDrawer(false);
    const view = $('#view');
    view.innerHTML = loading();
    try { await LC.views[mod.key](view); view.focus({ preventScroll: true }); window.scrollTo(0, 0); }
    catch (e) { console.error(e); view.innerHTML = '<div class="empty">No se pudo cargar esta pantalla. Recargá la página e intentá de nuevo.</div>'; }
  }

  buildNav();
  $('#menuBtn').addEventListener('click', () => setDrawer(true));
  $('#moreBtn').addEventListener('click', () => setDrawer(true));
  $('#scrim').addEventListener('click', () => setDrawer(false));
  window.addEventListener('hashchange', route);
  route();
})();
