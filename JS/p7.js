document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const removeBtn = document.getElementById('remove-btn');
    const addBtn = document.getElementById('add-btn');

    // Función para eliminar el primer elemento del menú
    removeBtn.addEventListener('click', () => {
        // Selecciona el primer hijo de la lista (menú)
        const firstItem = menu.children[0]; // children[0] selecciona el primer <li>
        if (firstItem) {
            firstItem.remove(); // Elimina el primer <li> del menú
        }
    });

    // Función para agregar un nuevo enlace al menú
    addBtn.addEventListener('click', () => {
        // Crea un nuevo elemento <li> con un enlace
        const newItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.href = '#'; // Puedes cambiar '#' por cualquier URL
        newLink.textContent = 'Nueva Película'; // Puedes cambiar el texto aquí

        // Añade el enlace al nuevo <li>
        newItem.appendChild(newLink);

        // Agrega el nuevo <li> al final del menú
        menu.appendChild(newItem);
    });
});
