// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Toggle Mobile Menu with error handling
function toggleMenu() {
    try {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        if (!menu || !icon) {
            console.error("Menu elements not found");
            return;
        }
        menu.classList.toggle("active");
        icon.classList.toggle("active");
    } catch (error) {
        console.error("Error toggling menu:", error);
    }
}

// Smooth scrolling for navigation links with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        try {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } catch (error) {
            console.error("Error in smooth scrolling:", error);
        }
    });
});

// Dark Mode Toggle with error handling and localStorage
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    
    if (themeToggle) {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
            themeToggle.textContent = savedTheme === 'dark-mode' ? "☀️" : "🌙";
        }

        themeToggle.addEventListener("click", () => {
            try {
                document.body.classList.toggle("dark-mode");
                const isDarkMode = document.body.classList.contains("dark-mode");
                themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
                localStorage.setItem('theme', isDarkMode ? 'dark-mode' : '');
            } catch (error) {
                console.error("Error toggling theme:", error);
            }
        });
    }
});

// Add active class to navigation links on scroll with debounce
const handleScroll = debounce(() => {
    try {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    } catch (error) {
        console.error("Error in scroll handling:", error);
    }
}, 100);

window.addEventListener('scroll', handleScroll);

// Add animation on scroll with error handling
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        try {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        } catch (error) {
            console.error("Error in intersection observer:", error);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    try {
        observer.observe(section);
    } catch (error) {
        console.error("Error observing section:", error);
    }
});
