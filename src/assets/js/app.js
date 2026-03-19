// Import CSS
import '../css/style.css';
import 'iconoir/css/iconoir.css';

// Import Alpine.js
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

// Import PerfectScrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

document.addEventListener('DOMContentLoaded', () => {
  const sidebarMenu = document.getElementById('sidebar-menu');
  if (sidebarMenu) {
    new PerfectScrollbar(sidebarMenu, {
      wheelSpeed: 0.25,
      wheelPropagation: true,
      minScrollbarLength: 20,
      maxScrollbarLength: 200,
      suppressScrollX: false,
    });
  }

  // Theme Persistence
  const themeController = document.querySelector('.theme-controller');
  if (themeController) {
    const savedTheme = localStorage.getItem('theme') || 'asteria-light';
    
    // Apply saved theme on load
    if (savedTheme === 'asteria-dark') {
      themeController.checked = true;
      document.documentElement.setAttribute('data-theme', 'asteria-dark');
    } else {
      themeController.checked = false;
      document.documentElement.setAttribute('data-theme', 'asteria-light');
    }

    themeController.addEventListener('change', (e) => {
      const theme = e.target.checked ? 'asteria-dark' : 'asteria-light';
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    });
  }
});

// Import datatables
import './datatables.js';
