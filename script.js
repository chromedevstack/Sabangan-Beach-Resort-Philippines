document.addEventListener('DOMContentLoaded', () => {
    // --- Loading Screen Logic ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const loadButton = document.getElementById('load-button');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Ensure mainContent is initially hidden by JavaScript.
    // While CSS also sets it to hidden, this ensures it regardless of CSS load order.
    mainContent.classList.remove('active');

    // Add event listener for the "Click here to load" button
    if (loadButton) { // Check if the button exists before adding event listener
        loadButton.addEventListener('click', () => {
            // Hide welcome screen
            welcomeScreen.classList.remove('active');

            // Show loading screen
            loadingScreen.classList.add('active');

            // Simulate a content loading process.
            // In a real application, you would replace this `setTimeout`
            // with actual data fetching (e.g., AJAX calls, API requests)
            // and hide the loading screen only after all necessary resources are ready.
            setTimeout(() => {
                // Hide loading screen
                loadingScreen.classList.remove('active');

                // Show main content
                mainContent.classList.add('active');

                // Crucial: Re-enable body scrolling after main content is loaded.
                // The CSS sets `overflow: hidden` initially for the loading screens.
                document.body.style.overflow = 'auto';

                // Optional: Scroll to the top of the main content once it's visible.
                // This ensures the user starts at the top of the resort page.
                window.scrollTo({ top: 0, behavior: 'smooth' });

            }, 3000); // Simulate 3 seconds of loading time
        });
    }

    // --- Sabangan Beach Resort Website Logic ---

    // Smooth scroll for navigation links
    // This targets all <a> tags whose href attribute starts with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default instant jump behavior of anchor links

            const targetId = this.getAttribute('href'); // Get the ID from the href attribute (e.g., "#about")

            // Only attempt to scroll if the main content is active,
            // or if the target is the "#home" section (which might be the initial view)
            if (mainContent.classList.contains('active') || targetId === '#home') {
                const targetElement = document.querySelector(targetId); // Find the element with the corresponding ID
                if (targetElement) { // Check if the target element actually exists
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Enable smooth scrolling
                    });
                }
            }
        });
    });

    // Scroll to Top Button functionality
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Only add scroll listener if the button element is found on the page
    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            // Check scroll position: show button if scrolled more than 300px down
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    }

    // Scroll to top function
    // This function is called directly from the `onclick` attribute in the HTML
    // (e.g., `<div class="scroll-to-top" onclick="scrollToTop()">⬆️</div>`)
    // Therefore, it needs to be accessible in the global scope (attached to `window`).
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smoothly scroll to the very top of the page
        });
    }
});
