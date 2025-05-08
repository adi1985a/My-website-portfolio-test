# NettDesignMagi

## Overview
NettDesignMagi is an HTML-based portfolio website showcasing graphic design, web development, and software development services (C++, Java, Python). Features a dynamic clock, social media links, and interactive content tiles. Styled with custom CSS, Fontello icons, and Google Fonts (Josefin Sans, Lato).

## Features
- **Dynamic Clock**: Displays current time, updated via `timer.js`.
- **Navigation Tiles**: Links for "Hvem er vi?", "Hva tilbyr vi?", "Vår portefølje", and "Ta kontakt med oss" with JavaScript content loading.
- **Social Media Links**: YouTube, Facebook, LinkedIn, and Twitter icons with external links.
- **Content Section**: Welcome message in Norwegian with a Mark Twain quote.
- **Footer**: Copyright, contact email, and collaboration invitation.
- **SEO**: Meta tags for description and keywords (e.g., Graphic Design, Web Development).
- **Styling**: Uses `style.css`, `fontello.css`, and Google Fonts.

## Requirements
- Web browser (e.g., Chrome, Firefox, Safari)
- Internet connection for external resources:
  - Google Fonts (`Josefin Sans`, `Lato` via `https://fonts.googleapis.com`)
- Local assets:
  - `style.css`: Main stylesheet
  - `css/fontello.css`: Fontello icon styles
  - `timer.js`: JavaScript for clock functionality

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Ensure the required assets are in place:
   - `style.css`: Stylesheet for layout and design.
   - `css/fontello.css`: Icon styles (with Fontello font files in `css/`).
   - `timer.js`: Script for updating the clock.
3. Host the site on a web server (e.g., Apache, Nginx) or open `index.html` directly:
   ```bash
   python -m http.server 8000
   ```
4. Access the site at `http://localhost:8000`.

## Usage
1. Open the website in a browser to view the homepage.
2. **Interface**:
   - **Header**: Displays "NettDesignMagi" logo and real-time clock.
   - **Tiles**: Click tiles ("Hvem er vi?", etc.) to load content (JavaScript-driven, placeholder).
   - **Main Content**: Read welcome message and Mark Twain quote.
   - **Social Links**: Access YouTube, Facebook, LinkedIn, or Twitter profiles.
   - **Footer**: View copyright and contact email.
3. **Actions**:
   - Click tiles to trigger `loadContent()` (requires implementation).
   - Use social media links to visit external profiles.
   - Contact via email link (`impersoftware@gmail.com`).

## File Structure
- `index.html`: Homepage with tiles, social links, and footer.
- `style.css`: Custom styles for layout and design.
- `css/fontello.css`: Fontello icon styles (assumes font files in `css/`).
- `timer.js`: JavaScript for clock updates.
- `README.md`: This file, providing project documentation.

## Notes
- The site uses English (`lang="en"`) but content is in Norwegian (e.g., "Hovedside").
- The `loadContent()` function is referenced but not defined; implement in `timer.js` or another script.
- Social media links are hardcoded; verify URLs for accuracy.
- Fontello requires font files (e.g., TTF/WOFF) in `css/` to work.
- The site is static; dynamic content loading needs additional JavaScript.
- Google Fonts require internet access; consider local fallback.
- The `style.css` and `timer.js` files are assumed to exist (not provided).

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or email impersoftware@gmail.com.