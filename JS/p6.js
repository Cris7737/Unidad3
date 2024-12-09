document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el contenedor del Bento Grid y la celda de la práctica 6
    const bentoGrid = document.querySelector('.bento');
    const designToggleCell = document.getElementById('change-design');

    // Evento de clic para alternar el diseño del Bento Grid
    designToggleCell.addEventListener('click', () => {
        bentoGrid.classList.toggle('alternative-design'); // Alterna la clase del diseño
    });
});
