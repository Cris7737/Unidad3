// Solicitar datos al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");
let edad = prompt("Por favor, ingresa tu edad:");
let pais = prompt("Por favor, ingresa tu país de residencia:");

// Mostrar los datos en un mensaje de alerta
alert(`Hola ${nombre}, te has registrado con los siguientes datos:\nEdad: ${edad}\nPaís: ${pais}`);

// Confirmar si los datos son correctos
let confirmacion = prompt("¿Son correctos tus datos? (Responde con 'si' o 'no')").toLowerCase();

if (confirmacion === "si") {
    // Mostrar mensaje en pantalla
    document.write(`
        <h1>Registro guardado correctamente</h1>
        <p><strong>Datos:</strong></p>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Edad: ${edad}</li>
            <li>País: ${pais}</li>
        </ul>
    `);
} else {
    // Mostrar mensaje en pantalla
    document.write("<h1>Registros borrados</h1>");
}
