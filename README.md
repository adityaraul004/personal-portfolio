# Bibek Bhandari - Interactive 3D Portfolio

This repository contains the code for my personal portfolio website, showcasing my projects, skills, and background as a Computer Science student.

**Live Demo:**[You can check this] (https://bibekbhandari.site) 

## Description

An interactive and visually engaging portfolio built with modern web technologies. It features 3D models, animations, and a clean user interface to provide an immersive experience.

## Features

*   **Interactive 3D Elements:** Utilizes Three.js for rendering 3D models and animations.
*   **Smooth Animations:** GSAP is used for performant and smooth page transitions and effects.
*   **Responsive Design:** Adapts seamlessly to different screen sizes (desktop, tablet, mobile) using Tailwind CSS.
*   **Key Sections:** Includes sections for About Me, Selected Projects, Technical Skills, and Contact.
*   **Project Showcase:** Dynamically displays project details.
*   **Contact Form:** Integrated with EmailJS for sending messages directly.

## Technologies Used

*   **Frontend Framework:** React (with Vite)
*   **3D Graphics:** Three.js / React Three Fiber (@react-three/fiber), @react-three/drei
*   **Styling:** Tailwind CSS
*   **Animation:** GSAP (@gsap/react)
*   **Email Service:** EmailJS (@emailjs/browser)
*   **Deployment:** Vercel

## Setup and Local Development

To run this project locally:

1.  **Clone the repository:**
```bash
    git clone https://github.com/Bibek1008/portfolio-website.git
    cd portfolio-website
    ```
2.  **Install dependencies:**
```bash
npm install
```
3.  **Set up EmailJS:**
    *   Create an account at [EmailJS](https://www.emailjs.com/).
    *   Obtain your Service ID, Template ID, and Public Key.
    *   Create a `.env` file in the root directory and add your credentials:
        ```
        VITE_APP_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
        VITE_APP_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
        VITE_APP_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
        ```
    *   _(Note: The contact form (`src/sections/Contact.jsx`) might need adjustments based on your specific EmailJS template.)_

4.  **Run the development server:**
```bash
npm run dev
```
    Open [http://localhost:5173](http://localhost:5173) (or the port specified in the output) in your browser.

## Build for Production

```bash
npm run build
```
This will create a `dist` folder with the optimized production build.

## Deployment

This project is configured for easy deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel for automatic builds and deployments.

## Author

*   **Bibek Bhandari**
    *   GitHub: [@Bibek1008](https://github.com/Bibek1008)
    *   LinkedIn: https://www.linkedin.com/in/bibek-bhandari-053283226/

