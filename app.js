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