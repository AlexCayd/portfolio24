document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
});

function scrollNav() {
    const enlaces = document.querySelectorAll('.nav a');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView( {
                behavior: 'smooth',
            });
        });
    });

    const headerBtn = document.querySelector('.header__btn');
    headerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const contacto = document.querySelector(e.target.attributes.href.value);
        contacto.scrollIntoView( {
            behavior: 'smooth',
        });
    });
}

// Hover imagen aboutme
const imageContainer = document.querySelector('.aboutme__imagecontenedor');

imageContainer.addEventListener('mousemove', (e) => {
  const rect = imageContainer.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  imageContainer.style.setProperty('--x', `${x}%`);
  imageContainer.style.setProperty('--y', `${y}%`);
});

imageContainer.addEventListener('mouseleave', () => {
  imageContainer.style.setProperty('--x', `50%`);
  imageContainer.style.setProperty('--y', `50%`);
});

