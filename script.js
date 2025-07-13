document.addEventListener('DOMContentLoaded', () => {
    // --- Loading Screen Logic ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const loadButton = document.getElementById('load-button');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Ensure mainContent is hidden initially by JavaScript, in case CSS loads slowly
    // (Though the combined CSS will also handle this with .screen initially hidden)
    mainContent.classList.remove('active'); // Redundant if CSS handles, but safer

    if (loadButton) { // Check if the button exists before adding event listener
        loadButton.addEventListener('click', () => {
            // Hide welcome screen
            welcomeScreen.classList.remove('active');

            // Show loading screen
            loadingScreen.classList.add('active');

            // Simulate a loading process (e.g., fetching data, processing)
            // In a real application, replace this with your actual loading logic
            setTimeout(() => {
                // Hide loading screen
                loadingScreen.classList.remove('active');

                // Show main content
                mainContent.classList.add('active');

                // Allow body scrolling after main content is loaded
                document.body.style.overflow = 'auto';

                // Optional: Scroll to the top of the main content once it's visible
                // window.scrollTo({ top: 0, behavior: 'smooth' });

            }, 3000); // Simulate 3 seconds of loading
        });
    }

    // --- Sabangan Beach Resort Website Logic ---

    // Smooth scroll for navigation links
    // Targets all <a> tags whose href starts with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = this.getAttribute('href');
            // Only scroll if the target is within the main content, or if main content is active
            if (mainContent.classList.contains('active') || targetId === '#home') { // Added #home check for direct link from header
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Show/hide scroll to top button
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Only add scroll listener if the button exists
    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            // Use window.scrollY for modern browsers, pageYOffset is older
            if (window.scrollY > 300) { // Show button after scrolling 300px
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    }

    // Scroll to top function (defined globally as it's called from HTML)
    // This function must be accessible from the `onclick` attribute in HTML
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});
