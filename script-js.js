document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips or other UI enhancements
    const itemCards = document.querySelectorAll('.item-card');
    
    itemCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add click functionality if needed
            console.log('Item clicked:', card.querySelector('.item-code').textContent);
        });
    });

    // Add responsive menu toggle if needed for mobile
    const handleResize = () => {
        const container = document.querySelector('.container');
        if (window.innerWidth < 768) {
            container.classList.add('mobile');
        } else {
            container.classList.remove('mobile');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});