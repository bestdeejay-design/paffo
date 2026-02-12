// Product interactions for PAFFO website

document.addEventListener('DOMContentLoaded', function() {
    initProductInteractions();
});

// Product interactions functionality
function initProductInteractions() {
    // Add to cart functionality
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // Visual feedback
            const originalIcon = this.innerHTML;
            this.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
                </svg>
            `;
            
            // Change color to indicate success
            this.style.backgroundColor = '#4CAF50';
            this.style.borderColor = '#4CAF50';
            
            setTimeout(() => {
                this.innerHTML = originalIcon;
                this.style.backgroundColor = '';
                this.style.borderColor = '';
            }, 2000);
            
            console.log(`Added ${productName} to cart`);
        });
    });
    
    // Quick view functionality
    document.querySelectorAll('.btn-quick-view').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            // In a real implementation, this would open a modal
            alert(`Quick view for: ${productName}`);
            console.log(`Quick view for: ${productName}`);
        });
    });
    
    // Color swatch selection
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            // Remove active class from siblings
            this.parentElement.querySelectorAll('.color-swatch').forEach(s => {
                s.classList.remove('active');
            });
            
            // Add active class to clicked swatch
            this.classList.add('active');
            
            console.log(`Selected color: ${this.style.backgroundColor}`);
        });
    });
    
    // Product card click to simulate going to product page
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            console.log(`Navigating to product page: ${productName}`);
        });
    });
}