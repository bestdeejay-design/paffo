// Mobile menu functionality for PAFFO website

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnHamburger) {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}