# Dusk-calc-zen

A modern, full-featured calculator web application with memory functions, scientific operations, and a sleek user interface with dark mode support.

## Features and Functionality

*   **Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division.
*   **Memory Functions:** Store, recall, add to, and subtract from memory (MC, MR, M+, M-).
*   **Scientific Operations:** Square root, exponents, percentage calculations, and the inclusion of Pi (π).
*   **Rounding:** Round the displayed number to 0 or 2 decimal places.
*   **Sign Toggle:** Change the sign of the displayed number (+/-).
*   **Clear Functions:** Clear the entire calculator (AC) or the current entry (CE).
*   **Responsive Design:**  The calculator is designed to be responsive and work on different screen sizes.
*   **Dark Mode:** Toggle between light and dark themes using the `DarkModeToggle` component located at `src/components/DarkModeToggle.tsx`.  The theme is persisted using `document.documentElement.classList.toggle('dark')`.
*   **3D Card Effect:** Uses a visually appealing 3D card effect for the calculator interface, implemented in `src/components/ui/3d-card.tsx`.
*   **React Query:** Utilizes `@tanstack/react-query` for data fetching and state management (although currently not actively used for data fetching but is setup in `src/App.tsx` for future API calls).
*   **Toaster Notifications:** Employs `sonner` and `@/components/ui/toaster` for providing user feedback through toast notifications.

## Technology Stack

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Vite:** A build tool that provides a fast and efficient development experience.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly styling the application.
*   **Radix UI:** A set of unstyled, accessible UI primitives. The project utilizes many Radix UI components located in `src/components/ui/*`.
*   **React Router:** For handling navigation between different pages (`src/App.tsx`).
*   **Lucide React:** For icons.

## Prerequisites

*   Node.js (version 18 or higher is recommended)
*   npm or yarn package manager


**##Deployed Link**
*https://dusk-calc-zen.vercel.app/

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/Blazehue/dusk-calc-zen.git
    cd dusk-calc-zen
    ```

2.  Install dependencies:

    ```bash
    npm install  # Or yarn install
    ```

## Usage Guide

1.  Start the development server:

    ```bash
    npm run dev  # Or yarn dev
    ```

2.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173/`).

3.  Use the calculator interface to perform calculations. Click the buttons to input numbers and operations.

## API Documentation

This project currently doesn't utilize any external APIs.  The `react-query` setup in `src/App.tsx` is present for potential future API integrations.

## Contributing Guidelines

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the `main` branch of the original repository.

## License Information

License is not specified.

## Contact/Support Information

For questions, bug reports, or feature requests, please open an issue on the GitHub repository: [https://github.com/Blazehue/dusk-calc-zen](https://github.com/Blazehue/dusk-calc-zen)
