document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        if (name && email && message) {
            // Add logic to send form data to a server or email
            alert('Thank you for your message!');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Dynamic Content Loading for Portfolio or Blog
    const loadContent = async (url, elementId) => {
        try {
            const response = await fetch(url);
            const data = await response.text();
            document.getElementById(elementId).innerHTML = data;
        } catch (error) {
            console.error('Error loading content:', error);
        }
    };

    // Example: loadContent('portfolio-data.html', 'portfolio');
    // Example: loadContent('blog-posts.json', 'blog');

    // Interactive Elements
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Toggle Dark Theme';
    document.body.insertBefore(themeToggle, document.body.firstChild);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Additional JavaScript can be added here for more features
});

// Dark Theme CSS (add this to your CSS file)
/*
*/
