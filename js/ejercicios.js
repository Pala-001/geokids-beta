document.addEventListener('DOMContentLoaded', () => {
    // Lógica para cambiar de pestaña
    const tabButtons = document.querySelectorAll('.main-nav button');
    const contentSections = document.querySelectorAll('.content-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Remover clase active de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Añadir clase active al botón seleccionado
            button.classList.add('active');

            // Mostrar solo la sección correspondiente
            contentSections.forEach(section => {
                section.classList.toggle('active', section.id === targetTab + '-content');
            });
        });
    });

    // Mostrar la primera sección por defecto
    document.querySelector('.main-nav button').click();
});
