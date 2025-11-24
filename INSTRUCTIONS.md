# Portfolio Update Instructions

## Design Goal
Redesign the portfolio website to match the layout and styling shown in the image `doc/nadhir-portfolio.webp`. This includes:
- Modern, visually appealing sections for Home, About, Experience, Services, Projects, and Contact.
- Smooth animations, responsive design, and theme support.
- Replace JSON data parsing with CSV parsing for better data handling.

## Data Migration: JSON to CSV
1. Convert all JSON files in the `data/` folder to CSV format:
   - `data/contact.json` → `data/contact.csv`
   - `data/experience.json` → `data/experience.csv`
   - `data/projects.json` → `data/projects.csv`
   - `data/services.json` → `data/services.csv`
   - `data/stats.json` → `data/stats.csv`
   - `data/titles.json` → `data/titles.csv`

   **CSV Structure Guidelines:**
   - Use comma-separated values with headers as the first row.
   - For arrays/objects in JSON, flatten into rows (e.g., one row per item).
   - Escape commas and quotes properly.
   - Example for projects:
     ```
     name,description,technologies,link,github,image
     Project 1,Desc...,React,Node,link,github,img.jpg
     ```

2. Delete old JSON files after successful conversion and testing.

## JavaScript Updates
- Update `js/fetch.js` to fetch CSV files instead of JSON.
- Use a CSV parsing library (e.g., PapaParse via CDN) or a simple custom parser.
- Modify section-specific JS files (`js/page_sections/*.js`) to use the new CSV data structures.
- Ensure dynamic loading and rendering matches the design image.

## Styling and Layout Updates
- Reference `doc/nadhir-portfolio.webp` for:
  - Color scheme, typography (e.g., Zona Pro font).
  - Section layouts: Hero/home, about with stats, experience timeline/cards, services grid, projects carousel/grid, contact form.
  - Navbar, animations (from `style/anims.css`), mobile responsiveness.
- Update `index.html` structure if needed (e.g., add/modify sections).
- Adjust CSS files in `style/` and `style/sections/`.

## Implementation Steps
1. Create CSV files from JSON (read JSON, convert, write CSV).
2. Update `js/fetch.js` for CSV parsing.
3. Refactor section JS files.
4. Revise HTML/CSS to match image design.
5. Test responsiveness and functionality.
6. Optimize assets (images, fonts).

## Testing
- Check on desktop, tablet, mobile.
- Verify data loads correctly from CSV.
- Ensure animations and interactions work.
- Validate no console errors.

## Tools Used
- Continue.dev agent for file edits, reads, and commands.