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
      wheelSpeed: 0.5,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    new PerfectScrollbar(mainContent, {
      wheelSpeed: 0.5,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

  // Theme Persistence
  const themeController = document.querySelector('.theme-controller');
  if (themeController) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'asteria-dark') {
      themeController.checked = true;
    }

    themeController.addEventListener('change', (e) => {
      if (e.target.checked) {
        localStorage.setItem('theme', 'asteria-dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
});

// Import datatables
import './datatables.js';
