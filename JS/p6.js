document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos el botón
    const button = document.getElementById('modificar-grid-btn');
    
    // Obtenemos el grid
    const bentoGrid = document.querySelector('.bento');
    
    // Estado para saber si el grid está modificado o no
    let isModified = false;

    // Función para modificar el grid
    function modifyBentoGrid() {
        if (!isModified) {
            // Modificar los estilos del Bento Grid
            bentoGrid.style.backgroundColor = '#FFD700'; // Fondo amarillo brillante
            bentoGrid.style.gap = '30px'; // Gap más grande entre las celdas
            bentoGrid.style.transform = 'scale(1.05)'; // Aumenta un poco el tamaño
            bentoGrid.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; // Agregar sombra alrededor
            bentoGrid.style.borderRadius = '15px'; // Bordes redondeados
            bentoGrid.style.transition = 'all 0.3s ease'; // Transición suave para todo
            bentoGrid.style.padding = '20px'; // Agregar padding interno para más espacio

            // Modificar las celdas
            const bentoItems = bentoGrid.querySelectorAll('.bento-item');
            bentoItems.forEach(item => {
                item.style.backgroundColor = '#32CD32'; // Verde brillante para las celdas
                item.style.color = '#fff'; // Texto blanco
                item.style.borderRadius = '10px'; // Bordes redondeados
                item.style.padding = '20px'; // Un poco más de padding en cada celda
                item.style.transition = 'background-color 0.3s ease'; // Transición para el color
            });

            // Cambiar el texto del botón
            button.textContent = 'Restaurar Bento Grid'; 
        } else {
            // Restaurar los estilos originales del Bento Grid
            bentoGrid.style.backgroundColor = ''; // Restaura el fondo original
            bentoGrid.style.gap = ''; // Restaura el gap original
            bentoGrid.style.transform = ''; // Restaura la escala original
            bentoGrid.style.boxShadow = ''; // Elimina la sombra
            bentoGrid.style.borderRadius = ''; // Restaura el borde original
            bentoGrid.style.transition = ''; // Elimina la transición
            bentoGrid.style.padding = ''; // Restaura el padding original

            // Restaurar las celdas a sus estilos originales
            const bentoItems = bentoGrid.querySelectorAll('.bento-item');
            bentoItems.forEach(item => {
                item.style.backgroundColor = ''; // Restaura el fondo original
                item.style.color = ''; // Restaura el color original del texto
                item.style.borderRadius = ''; // Restaura el borde original
                item.style.padding = ''; // Restaura el padding original
                item.style.transition = ''; // Elimina la transición
            });

            // Restaurar el texto del botón
            button.textContent = 'Modificar Bento Grid'; // Restaura el texto original del botón
        }
        isModified = !isModified; // Cambiar el estado para saber si el grid está modificado o no
    }

    // Agregar evento de clic al botón
    button.addEventListener('click', modifyBentoGrid);
});
