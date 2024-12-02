// Función para mostrar la bienvenida y recolectar datos
function mostrarBienvenidaYRecolectarDatos() {
    alert("¡Bienvenido/a! Vamos a recolectar tu información.");
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const actividad = prompt("¿Cuál es tu actividad favorita?");
    return { nombre, actividad };
}

// Función para confirmar si los datos son correctos
function confirmarDatos(nombre, actividad) {
    return confirm(`¿Son correctos estos datos?\n\nNombre: ${nombre}\nActividad favorita: ${actividad}`);
}

// Función para mostrar un mensaje final
function mostrarMensajeFinal(confirmacion, datos) {
    if (confirmacion) {
        alert(`¡Gracias, ${datos.nombre}! Hemos registrado tu actividad favorita: "${datos.actividad}".`);
        document.write(`<h1>Registro exitoso</h1><p>Gracias, ${datos.nombre}. Tu actividad favorita "${datos.actividad}" ha sido registrada.</p>`);
    } else {
        alert("Has cancelado el registro.");
        document.write("<h1>Registro cancelado</h1><p>No se guardó ningún dato.</p>");
    }
}

// Función libre: Mostrar un mensaje motivacional basado en la actividad
function mostrarMensajeMotivacional(actividad) {
    const mensajes = {
        leer: "¡La lectura abre las puertas a mundos infinitos!",
        correr: "¡Mantente activo, el ejercicio es la clave para una vida saludable!",
        cocinar: "¡Explorar la cocina es una forma deliciosa de expresarte!",
        programar: "¡La programación te permite construir el futuro con tus propias manos!",
    };

    const mensaje = mensajes[actividad.toLowerCase()] || "¡Tu actividad favorita suena increíble! ¡Sigue disfrutándola!";
    alert(mensaje);
}

// Función principal para manejar el flujo del programa
function iniciarPrograma() {
    const datos = mostrarBienvenidaYRecolectarDatos(); // Paso 1: Mostrar bienvenida y recolectar datos
    const confirmacion = confirmarDatos(datos.nombre, datos.actividad); // Paso 2: Confirmar los datos
    if (confirmacion) {
        mostrarMensajeMotivacional(datos.actividad); // Función libre: Mostrar mensaje motivacional
    }
    mostrarMensajeFinal(confirmacion, datos); // Paso 3: Mostrar mensaje final
}

// Llamar a la función principal
iniciarPrograma();
