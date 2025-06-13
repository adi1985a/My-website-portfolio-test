# ✨🎨 NettDesignMagi: Creative Portfolio Website 🇳🇴
_An HTML, CSS, and JavaScript-based portfolio website showcasing design and development services, featuring a dynamic clock, interactive content tiles, social media integration, and presented primarily in Norwegian._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Josefin%20Sans%20%7C%20Lato-4285F4.svg?logo=googlefonts)](https://fonts.google.com/)
[![Fontello](https://img.shields.io/badge/Icons-Fontello-1F77B4.svg)]() <!-- No official Fontello logo for shields.io, generic icon badge -->

## 📋 Table of Contents
1.  [Overview](#-overview)
2.  [Key Features](#-key-features)
3.  [Screenshots (Conceptual)](#-screenshots-conceptual)
4.  [Technical Stack & Requirements](#-technical-stack--requirements)
5.  [Local Setup & Viewing](#️-local-setup--viewing)
6.  [Website Usage & Navigation](#️-website-usage--navigation)
7.  [File Structure](#-file-structure)
8.  [Important Notes & Considerations](#-important-notes--considerations)
9.  [Contributing](#-contributing)
10. [License](#-license)
11. [Contact](#-contact)

## 📄 Overview

**NettDesignMagi** (Web Design Magic) is a static portfolio website developed by Adrian Lesniak, designed to showcase a range of creative services including graphic design, web development, and software development (specializing in C++, Java, Python). Built with HTML, custom CSS (`style.css`), and JavaScript (`timer.js`), the site features a dynamic real-time clock, interactive navigation tiles that are intended to load content dynamically, and prominent social media links using Fontello icons. The primary language of the content is Norwegian, and it incorporates Google Fonts (Josefin Sans, Lato) for typography. SEO considerations are included with meta tags for description and keywords.

<p align="center">
  <img src="screenshots/1.gif" width="70%">
</p>

## ✨ Key Features

*   ⏱️ **Dynamic Real-Time Clock**: Displays the current time in the header, updated every second via `timer.js`.
*   🧱 **Interactive Navigation Tiles**: Features four main navigation tiles/sections:
    *   "Hvem er vi?" (Who are we?)
    *   "Hva tilbyr vi?" (What do we offer?)
    *   "Vår portefølje" (Our portfolio)
    *   "Ta kontakt med oss" (Contact us)
    *   These tiles are intended to load content dynamically into a designated area using a JavaScript `loadContent()` function (implementation pending).
*   📱 **Social Media Integration**:
    *   Includes links to YouTube, Facebook, LinkedIn, and Twitter profiles.
    *   Utilizes Fontello icons for visually appealing social media links.
*   📝 **Main Content Section**:
    *   Presents a welcome message in Norwegian.
    *   Features a motivational quote by Mark Twain.
*   🦶 **Comprehensive Footer**:
    *   Displays copyright information.
    *   Provides a contact email address (`impersoftware@gmail.com`).
    *   Includes a collaboration invitation.
*   🔍 **SEO Meta Tags**:
    *   Includes `<meta name="description">` and `<meta name="keywords">` tags with relevant content (e.g., Graphic Design, Web Development, Software Development, C++, Java, Python) to improve search engine visibility.
*   🎨 **Custom Styling & Typography**:
    *   Styled with a custom stylesheet (`style.css`).
    *   Uses Fontello icons (`css/fontello.css` and associated font files).
    *   Employs Google Fonts: "Josefin Sans" and "Lato" for distinct typography, linked via `https://fonts.googleapis.com`.
*   🇳🇴 **Norwegian Content**: The primary language for UI text and content sections is Norwegian (though the HTML `lang` attribute is set to "en" in the provided notes).

## 🖼️ Screenshots (Conceptual)

_Screenshots of: the website's header with the dynamic clock and logo, the interactive navigation tiles, the main content area with the welcome message, the social media links, and the footer._

<p align="center">
  <img src="screenshots\1.jpg" width="300"/>
  <img src="screenshots\2.jpg" width="300"/>
  <img src="screenshots\3.jpg" width="300"/>
  <img src="screenshots\4.jpg" width="300"/>
  <img src="screenshots\5.jpg" width="300"/>
  <img src="screenshots\6.jpg" width="300"/>
  <img src="screenshots\7.jpg" width="300"/>
  <img src="screenshots\8.jpg" width="300"/>
  <img src="screenshots\9.jpg" width="300"/>
  <img src="screenshots\10jpg" width="300"/>
</p>

## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Structure**: HTML5
*   **Styling**: CSS3 (`style.css`, `css/fontello.css`)
*   **Interactivity**: JavaScript (ES6+) (`timer.js`)
*   **Fonts**: Google Fonts (Josefin Sans, Lato), Fontello (icon font)

### Requirements:
*   **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
*   **Internet Connection**: Required to load Google Fonts from `https://fonts.googleapis.com`. Fontello icons also rely on linked font files.
*   **Local Assets**: All specified CSS, JavaScript, and Fontello font files must be present in the correct locations relative to `index.html`.
    *   `style.css` (root directory or linked path)
    *   `css/fontello.css` (in `css/` subfolder)
    *   Fontello font files (e.g., `.eot`, `.svg`, `.ttf`, `.woff`, `.woff2`) must be in the `css/font/` (or similar, as configured by Fontello) directory relative to `fontello.css`.
    *   `timer.js` (root directory or linked path)

## ⚙️ Local Setup & Viewing

1.  **Clone or Download the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` and `<repository-directory>` with your specific details, or simply download the files into a local folder).*

2.  **Ensure Asset Placement**:
    *   Verify that `style.css` and `timer.js` are in the same directory as `index.html` (or update paths in `index.html` if they are in subfolders like `css/` or `js/`).
    *   Confirm that the `css/` subfolder exists and contains `fontello.css` and its associated font files (typically in a `font/` sub-subfolder within `css/`).
    *   *(No specific image assets like `.jpg` or `.png` were mentioned for the site structure itself, only external font/icon resources).*

3.  **Open in Browser or Host Locally**:
    *   **Directly in Browser**: You can usually open `index.html` directly in your web browser (File > Open File).
    *   **Using a Simple HTTP Server (Recommended for proper asset loading and JS behavior)**:
        If you have Python installed, navigate to the project's root directory in your terminal and run:
        ```bash
        python -m http.server 8000
        ```
        Then, open your web browser and go to `http://localhost:8000`.
    *   Alternatively, use any other local web server solution (e.g., Live Server extension in VS Code, XAMPP/MAMP htdocs).

## 💡 Website Usage & Navigation

1.  Open `index.html` in your web browser using one of the methods described above.
2.  **Interface**:
    *   **Header**: Displays the "NettDesignMagi" logo/title and the dynamic real-time clock.
    *   **Navigation Tiles**: Four prominent clickable tiles: "Hvem er vi?", "Hva tilbyr vi?", "Vår portefølje", and "Ta kontakt med oss".
    *   **Main Content Area**: Initially shows a welcome message in Norwegian and a Mark Twain quote. This area is intended to be updated when navigation tiles are clicked.
    *   **Social Media Links**: Icons for YouTube, Facebook, LinkedIn, and Twitter, linking to external profiles.
    *   **Footer**: Contains copyright information, a contact email (`impersoftware@gmail.com`), and a collaboration invitation.
3.  **Actions**:
    *   **View Clock**: Observe the real-time clock in the header.
    *   **Click Navigation Tiles**: Clicking on tiles like "Hvem er vi?" is intended to trigger the `loadContent()` JavaScript function to dynamically load new content into the main content area. *(Note: The `loadContent()` function itself needs to be implemented).*
    *   **Use Social Media Links**: Click on the social media icons to visit the respective external profiles.
    *   **Contact**: Use the email link in the footer to initiate contact.

## 🗂️ File Structure

The project is expected to have the following basic file structure:

*   `index.html`: The main HTML file containing the structure for the header, clock, navigation tiles, content area, social links, and footer.
*   `style.css`: The primary custom CSS file for styling all visual elements of the website.
*   `css/` (subfolder):
    *   `fontello.css`: CSS styles for the Fontello icons.
    *   `font/` (sub-subfolder, or similar path configured by Fontello): Contains the Fontello font files (e.g., `fontello.eot`, `fontello.ttf`, `fontello.woff`, `fontello.woff2`, `fontello.svg`).
*   `timer.js`: The JavaScript file responsible for the dynamic clock functionality and potentially the `loadContent()` function.
*   `README.md`: This documentation file.

## 📝 Important Notes & Considerations

*   **Language Mix**: The HTML document's `lang` attribute is set to "en" (English), but the visible content (titles, navigation, welcome message) is primarily in Norwegian. This could be harmonized for better accessibility and SEO by setting `lang="no"`.
*   **`loadContent()` Functionality**: The `loadContent()` JavaScript function, referenced by the navigation tiles, is **not defined** in the provided overview. This is a critical piece of interactivity that needs to be implemented in `timer.js` or a separate JavaScript file for the dynamic content loading to work.
*   **Placeholder Navigation**: The dynamic content loading for tiles is currently a placeholder concept until `loadContent()` is implemented. The target content for each tile also needs to be created (e.g., as separate HTML snippets, JSON data, or embedded in the JS).
*   **Social Media URLs**: The URLs for the social media links are hardcoded in `index.html`. These should be verified for accuracy and updated as needed.
*   **Fontello Setup**: Fontello icon integration requires not only `fontello.css` but also the associated font files (`.eot`, `.ttf`, `.woff`, etc.) to be correctly placed (usually in a `font/` subfolder relative to `fontello.css`) and linked by the CSS.
*   **Google Fonts Dependency**: The site relies on an internet connection to fetch "Josefin Sans" and "Lato" from Google Fonts. Consider adding local fallback fonts in `style.css` for offline viewing or improved performance.
*   **Static Nature**: This is primarily a static website. The "dynamic content loading" via JavaScript would still fetch static content or manipulate the DOM on the client side. True dynamic features (like a CMS or user accounts) would require a backend system.
*   **Assumed Files**: The functionality heavily depends on the content of `style.css` and `timer.js`, which are assumed to be provided/implemented but not detailed in the overview.

## 🤝 Contributing

Contributions to **NettDesignMagi** are welcome! If you have ideas for:

*   Implementing the `loadContent()` JavaScript function and creating content for each tile.
*   Adding more portfolio items or service details.
*   Improving the CSS styling, responsiveness, or animations.
*   Optimizing asset loading or providing local font fallbacks.
*   Enhancing SEO or accessibility.

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/YourDesignIdea`).
3.  Make your changes (HTML, CSS, JS).
4.  Commit your changes (`git commit -m 'Feature: Implement YourDesignIdea'`).
5.  Push to the branch (`git push origin feature/YourDesignIdea`).
6.  Open a Pull Request.

## 📃 License

This project is licensed under the **MIT License**.
(If you have a `LICENSE` file in your repository, refer to it: `See the LICENSE file for details.`)

## 📧 Contact

Project developed by **Adrian Lesniak**.
For questions or feedback, please open an issue on the GitHub repository.

---
🌟 _Crafting digital magic with design and code!_
