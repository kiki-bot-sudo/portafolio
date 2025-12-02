// Animación de entrada para las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase de animación a las tarjetas
    const cards = document.querySelectorAll('.activity-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Efecto de click en las tarjetas
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Si no se hizo click en el enlace, redirigir
            if (!e.target.classList.contains('activity-link')) {
                const link = this.querySelector('.activity-link');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });

    // Animación del header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        header.style.transition = 'all 0.8s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 200);

    // Logging para debug
    console.log(`Portafolio cargado correctamente`);
    console.log(`Total de actividades: ${cards.length}`);
});

// Función para agregar efecto parallax suave al scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Efecto de hover mejorado para las tarjetas
document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});