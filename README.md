# Dusk Calc Zen 🧮✨

<div align="center">

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdusk-calc-zen.vercel.app%2F&style=flat-square)](https://dusk-calc-zen.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73499?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A modern, full-featured calculator web application with memory functions, scientific operations, and a sleek user interface.**

[Live Demo](https://dusk-calc-zen.vercel.app/) • [Report Bug](https://github.com/Blazehue/dusk-calc-zen/issues) • [Request Feature](https://github.com/Blazehue/dusk-calc-zen/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 🎯 Overview

**Dusk Calc Zen** is a sophisticated calculator application that combines powerful functionality with modern design aesthetics. Built with React and TypeScript, it offers a seamless calculation experience with features ranging from basic arithmetic to scientific operations, all wrapped in an elegant interface with dark mode support.

Whether you're doing quick calculations or complex mathematical operations, Dusk Calc Zen provides an intuitive and visually appealing tool that works flawlessly across all devices.

---

## ✨ Features

### 🧮 Core Functionality
- **Basic Arithmetic Operations**: Addition (+), subtraction (-), multiplication (×), and division (÷)
- **Memory Functions**: Complete memory management with MC (Memory Clear), MR (Memory Recall), M+ (Memory Add), and M- (Memory Subtract)
- **Scientific Operations**: 
  - Square root (√)
  - Exponentiation (x²)
  - Percentage calculations (%)
  - Pi constant (π)
- **Number Formatting**: 
  - Round to 0 decimal places
  - Round to 2 decimal places
- **Sign Toggle**: Quickly change between positive and negative numbers (+/-)
- **Clear Functions**: 
  - AC (All Clear) - Reset everything
  - CE (Clear Entry) - Clear current entry only

### 🎨 User Experience
- **🌓 Dark Mode**: Toggle between light and dark themes with settings persistence across sessions
- **📱 Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **🎴 3D Card Effect**: Eye-catching 3D card design for the calculator interface
- **🔔 Toast Notifications**: Real-time user feedback for actions and errors
- **⚡ Lightning Fast**: Built with Vite for instant hot module replacement and blazing-fast performance
- **♿ Accessible**: Built with accessibility in mind using Radix UI primitives

### 🎯 Additional Highlights
- **Persistent State**: Your preferences and settings are saved locally
- **Error Handling**: Graceful error messages for invalid operations
- **Decimal Support**: Full support for decimal number calculations
- **Continuous Calculations**: Chain multiple operations seamlessly

---

## 📸 Screenshots

<div align="center">

### Light Mode
*Modern, clean interface for daytime use*

### Dark Mode
*Easy on the eyes for low-light environments*

### Mobile View
*Fully responsive design that works on any device*

</div>

---

## 🛠️ Technology Stack

### Frontend Framework
- **[React 18](https://reactjs.org/)** - Modern UI library with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for robust code
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling with instant server start

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library
- **[class-variance-authority](https://cva.style/)** - CSS-in-TS utility for component variants

### State Management & Data
- **[TanStack Query](https://tanstack.com/query)** (React Query) - Powerful data fetching and state management
- **LocalStorage API** - For persisting user preferences

### Routing & Notifications
- **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React applications
- **[Sonner](https://sonner.emilkowal.ski/)** - Elegant toast notifications

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS transformation and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)

Check your versions:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Blazehue/dusk-calc-zen.git
   cd dusk-calc-zen
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

---

## 📖 Usage Guide

### Basic Operations

1. **Input Numbers**: Click on number buttons (0-9) or use your keyboard
2. **Perform Operations**: Click operation buttons (+, -, ×, ÷) or use keyboard shortcuts
3. **Get Results**: Press the equals button (=) or Enter key
4. **Clear**: Use AC to clear everything or CE to clear the current entry

### Memory Functions

- **MC (Memory Clear)**: Clears the value stored in memory
- **MR (Memory Recall)**: Displays the value stored in memory
- **M+ (Memory Add)**: Adds the current display value to memory
- **M- (Memory Subtract)**: Subtracts the current display value from memory

### Scientific Operations

- **√ (Square Root)**: Calculates the square root of the displayed number
- **x² (Square)**: Squares the displayed number
- **% (Percentage)**: Converts the displayed number to a percentage
- **π (Pi)**: Inserts the value of Pi (3.14159...)

### Rounding

- **0 decimal**: Rounds to the nearest integer
- **2 decimal**: Rounds to two decimal places

---

## 📁 Project Structure

```
dusk-calc-zen/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components (Radix UI)
│   │   └── ...         # Feature-specific components
│   ├── lib/            # Utility functions and helpers
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components (routes)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

---

## ⌨️ Keyboard Shortcuts

Enhance your productivity with keyboard shortcuts:

| Key | Action |
|-----|--------|
| `0-9` | Input numbers |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` or `=` | Calculate result |
| `Backspace` | Clear last entry |
| `Escape` | All clear |
| `.` | Decimal point |

---

## 🌐 Browser Support

Dusk Calc Zen supports all modern browsers:

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Opera (last 2 versions)

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add tests for new features when applicable
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 🗺️ Roadmap

Future enhancements planned for Dusk Calc Zen:

- [ ] **History Panel**: View and reuse previous calculations
- [ ] **Advanced Scientific Mode**: Trigonometric functions, logarithms, and more
- [ ] **Custom Themes**: User-defined color schemes
- [ ] **Keyboard-Only Mode**: Full navigation without mouse
- [ ] **Export/Import Settings**: Share calculator configurations
- [ ] **Multi-language Support**: Internationalization (i18n)
- [ ] **Calculation History Export**: Save history as CSV or PDF
- [ ] **Programmer Mode**: Binary, hexadecimal, and octal calculations
- [ ] **Unit Converter**: Built-in converter for common units
- [ ] **Currency Converter**: Real-time currency conversion with API integration

See the [open issues](https://github.com/Blazehue/dusk-calc-zen/issues) for a full list of proposed features and known issues.

---

## 📄 License

This project is currently unlicensed. Please contact the repository owner for usage permissions.

---

## 🙏 Acknowledgments

Special thanks to:

- [React Team](https://reactjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for seamless deployment and hosting
- [Tailwind Labs](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for the beautiful icon set
- All contributors and users of Dusk Calc Zen

---

## 📞 Contact

**Blazehue** - [@Blazehue](https://github.com/Blazehue)

**Project Link**: [https://github.com/Blazehue/dusk-calc-zen](https://github.com/Blazehue/dusk-calc-zen)

**Live Demo**: [https://dusk-calc-zen.vercel.app/](https://dusk-calc-zen.vercel.app/)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ and ☕ by [Blazehue](https://github.com/Blazehue)

</div>
