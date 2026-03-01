// ========== Utility Functions ==========

/**
 * Parse CSV data into an array of objects
 */
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    if (lines.length < 2) return [];
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        if (values.length === headers.length) {
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index].trim().replace(/^"|"$/g, '');
            });
            data.push(obj);
        }
    }
    
    return data;
}

/**
 * Parse a CSV line handling quoted values with commas
 */
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    
    result.push(current);
    return result;
}

/**
 * Load CSV file
 */
async function loadCSV(filepath) {
    try {
        const response = await fetch(filepath);
        const text = await response.text();
        return parseCSV(text);
    } catch (error) {
        console.error(`Error loading ${filepath}:`, error);
        return [];
    }
}

// ========== Navigation ==========

function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ========== Home Section ==========

async function loadHomeSection() {
    const homeData = await loadCSV('data/home.csv');
    const titlesData = await loadCSV('data/titles.csv');
    
    if (homeData.length > 0) {
        const home = homeData[0];
        
        // Set name
        document.getElementById('home-name').textContent = home.name || 'Zak';
        
        // Set profile image
        const profileImg = document.getElementById('profile-img');
        profileImg.src = home.image || '';
        profileImg.alt = home.name || 'Profile';
        
        // Set resume link
        const resumeBtn = document.getElementById('resume-btn');
        resumeBtn.href = home.resume_link || '#';
        
        // Set GitHub link
        const githubBtn = document.getElementById('github-btn');
        githubBtn.href = home.github_repos || '#';
    }
    
    // Animated titles
    if (titlesData.length > 0) {
        const titles = titlesData.map(row => row.titles).filter(Boolean);
        if (titles.length > 0) {
            const titleElement = document.getElementById('home-title');
            let currentIndex = 0;
            
            function changeTitle() {
                titleElement.style.opacity = '0';
                setTimeout(() => {
                    titleElement.textContent = titles[currentIndex];
                    titleElement.style.opacity = '1';
                    currentIndex = (currentIndex + 1) % titles.length;
                }, 300);
            }
            
            changeTitle();
            setInterval(changeTitle, 3000);
        }
    }
}

// ========== Services Section ==========

async function loadServicesSection() {
    const servicesData = await loadCSV('data/services.csv');
    const servicesGrid = document.getElementById('services-grid');
    
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        `;
        servicesGrid.appendChild(card);
    });
}

// ========== Experience Section ==========

async function loadExperienceSection() {
    const experienceData = await loadCSV('data/experience.csv');
    const timeline = document.getElementById('timeline');
    
    experienceData.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-time">${exp.time}</div>
            <div class="timeline-title">${exp.title}</div>
            <div class="timeline-desc">${exp.desc}</div>
        `;
        timeline.appendChild(item);
    });
}

// ========== Projects Section ==========

async function loadProjectsSection() {
    const projectsData = await loadCSV('data/projects.csv');
    const projectsGrid = document.getElementById('projects-grid');
    
    projectsData.forEach(project => {
        if (!project.title) return; // Skip empty rows
        
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const imageHtml = project.img ? 
            `<div class="project-image">
                <img src="${project.img}" alt="${project.title}">
            </div>` : '';
        
        const linkHtml = project.url ? 
            `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                View Project →
            </a>` : '';
        
        card.innerHTML = `
            ${imageHtml}
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                ${linkHtml}
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// ========== About Section ==========

async function loadAboutSection() {
    const aboutData = await loadCSV('data/about.csv');
    
    // Convert field-value pairs to object
    const about = {};
    aboutData.forEach(row => {
        about[row.field] = row.value;
    });
    
    if (Object.keys(about).length > 0) {
        document.getElementById('about-title').textContent = about.title || 'About';
        document.getElementById('about-description').textContent = about.description || '';
        
        const aboutImg = document.getElementById('about-img');
        aboutImg.src = about.image || '';
        aboutImg.alt = about.title || 'About';
    }
}

// ========== Stats Section ==========

async function loadStatsSection() {
    const statsData = await loadCSV('data/stats.csv');
    const statsGrid = document.getElementById('stats-grid');
    
    statsData.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        card.innerHTML = `
            <div class="stat-number">${stat.num}</div>
            <div class="stat-label">${stat.unit}</div>
        `;
        statsGrid.appendChild(card);
    });
    
    // Animate numbers on scroll
    animateStats();
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(num => observer.observe(num));
}

// ========== Contact Section ==========

async function loadContactSection() {
    const contactData = await loadCSV('data/contact.csv');
    const contactGrid = document.getElementById('contact-grid');
    
    contactData.forEach(contact => {
        const card = document.createElement('a');
        card.href = contact.url || '#';
        card.className = 'contact-card';
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        
        card.innerHTML = `
            <img src="${contact.img}" alt="${contact.title}" class="contact-icon">
            <div class="contact-title">${contact.title}</div>
        `;
        contactGrid.appendChild(card);
    });
}

// ========== Initialize Everything ==========

async function init() {
    // Initialize navigation
    initNavigation();
    
    // Load all sections
    await Promise.all([
        loadHomeSection(),
        loadServicesSection(),
        loadExperienceSection(),
        loadProjectsSection(),
        loadAboutSection(),
        loadStatsSection(),
        loadContactSection()
    ]);
    
    console.log('Portfolio loaded successfully!');
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
