/* Configuración general. Activar un módulo futuro = cambiar enabled a true
   (y entregar su vista en LC.views). Los módulos desactivados no tienen pantalla. */
window.LC = window.LC || {};
LC.config = {
  brand: 'La Chiru Jeans',
  currency: 'ARS',
  timeZone: 'America/Argentina/Buenos_Aires',
  vatRate: 0.21,
  // Fase 2: URL del Web App de Apps Script. Mientras sea null se usa el repositorio de demostración.
  apiUrl: null,
  modules: [
    { key: 'dashboard',     label: 'Dashboard',     icon: 'dashboard', enabled: true,  quick: true },
    { key: 'ventas',        label: 'Ventas',        icon: 'sales',     enabled: true,  quick: true },
    { key: 'articulos',     label: 'Artículos',     icon: 'articles',  enabled: true,  quick: true },
    { key: 'clientes',      label: 'Clientes',      icon: 'clients',   enabled: true,  quick: true },
    { key: 'proveedores',   label: 'Proveedores',   icon: 'suppliers', enabled: true },
    { key: 'reportes',      label: 'Reportes',      icon: 'reports',   enabled: true },
    { key: 'recepcion',     label: 'Recepción',     icon: 'reception', enabled: false },
    { key: 'empleados',     label: 'Empleados',     icon: 'employees', enabled: false },
    { key: 'bonus',         label: 'Bonus',         icon: 'bonus',     enabled: false },
    { key: 'kits',          label: 'Kits',          icon: 'kits',      enabled: false },
    { key: 'configuracion', label: 'Configuración', icon: 'settings',  enabled: false }
  ]
};
