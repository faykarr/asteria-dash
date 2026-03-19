# Asteria Dash

[![Stars](https://img.shields.io/github/stars/faykarr/asteria-dash?style=flat-square)](https://github.com/faykarr/asteria-dash/stargazers)
[![Forks](https://img.shields.io/github/forks/faykarr/asteria-dash?style=flat-square)](https://github.com/faykarr/asteria-dash/network/members)
[![Issues](https://img.shields.io/github/issues/faykarr/asteria-dash?style=flat-square)](https://github.com/faykarr/asteria-dash/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/faykarr/asteria-dash?style=flat-square)](https://github.com/faykarr/asteria-dash/pulls)
[![License](https://img.shields.io/github/license/faykarr/asteria-dash?style=flat-square)](LICENSE)

Asteria Dash is a agnostic framework modern admin dashboard template built with Vite, Tailwind CSS v4, Alpine.js, and Handlebars. This template is designed to provide a clean, responsive, and easily customizable interface for various web application needs.

## Key Features

- **Vite**: A blazing fast build tool for modern web development.
- **Tailwind CSS (v4)**: A utility-first CSS framework for rapid and flexible styling.
- **Alpine.js**: A lightweight JavaScript framework for component interactivity.
- **Handlebars**: A templating engine to separate HTML structure into reusable components.
- **DaisyUI**: A component plugin for Tailwind CSS to speed up UI development.
- **Iconoir**: Elegant open-source icons.
- **Perfect Scrollbar**: Beautiful custom scrollbars to enhance the look and feel.

## Prerequisites

Make sure you have Node.js installed on your system before starting.

## Getting Started

Follow these steps to run the project in your local environment:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/faykarr/asteria-dash.git
   cd asteria-dash
   ```

2. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   The Vite server will run and can be accessed via your browser, usually at `http://localhost:5173`.

## Project Structure

```text
asteria-dash/
├── src/
│   ├── assets/       # CSS files, images, and other static assets
│   ├── data/         # JSON data or configuration files
│   ├── layouts/      # Main Handlebars layouts (e.g., layout.hbs)
│   ├── pages/        # Specific pages
│   └── partials/     # Reusable Handlebars components
├── package.json      # Project dependencies and scripts configuration
└── vite.config.js    # Vite-specific configuration
```

## Build for Production

To generate production-ready static files, run the following command:

```bash
npm run build
```

The build results will be in the `dist` folder.

## License

This project is licensed under the [MIT License](LICENSE). Copyright (c) 2026 Nasyath Faykar.

## Contributing

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project. We appreciate every form of contribution! Don't forget to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Supports Developer

If you find this project useful and want to support its development, you can donate via:

[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/faykar)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/faykarr)

