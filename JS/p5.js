// Función para recolectar frutas
function ejecutarProgramaFrutas() {
    const frutas = [];
    alert("Bienvenido/a al programa de frutas. Ingresa los nombres de las frutas una por una. Escribe 'salir' para terminar.");
    let continuar = true;

    while (continuar) {
        const fruta = prompt("Ingresa el nombre de una fruta (o escribe 'salir' para finalizar):");
        if (fruta && fruta.toLowerCase() === "salir") {
            continuar = false;
        } else if (fruta) {
            frutas.push(fruta);
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    }

    if (frutas.length > 0) {
        alert("Las frutas que ingresaste son: " + frutas.join(", "));
    } else {
        alert("No ingresaste ninguna fruta.");
    }
}

// Función para calcular el promedio de calificaciones
function ejecutarProgramaCalificaciones() {
    const calificaciones = [];
    alert("Bienvenido/a al programa de calificaciones. Ingresa tus calificaciones una por una. Escribe 'salir' para terminar.");
    let continuar = true;

    while (continuar) {
        const calificacion = prompt("Ingresa una calificación (o escribe 'salir' para finalizar):");
        if (calificacion && calificacion.toLowerCase() === "salir") {
            continuar = false;
        } else if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {
            calificaciones.push(parseFloat(calificacion));
        } else {
            alert("Por favor, ingresa una calificación válida entre 0 y 100.");
        }
    }

    if (calificaciones.length > 0) {
        const suma = calificaciones.reduce((a, b) => a + b, 0);
        const promedio = (suma / calificaciones.length).toFixed(2);
        alert(`Has ingresado las siguientes calificaciones: ${calificaciones.join(", ")}\n\nPromedio: ${promedio}`);
    } else {
        alert("No ingresaste ninguna calificación.");
    }
}

// Función para manejar números
function ejecutarProgramaNumeros() {
    const numeros = [5, 10, 15, 20]; // Arreglo inicial con números
    alert(`El arreglo inicial es: ${numeros.join(", ")}`);
    let continuar = true;

    while (continuar) {
        const numero = prompt("Ingresa un número para agregar al arreglo (o escribe 'salir' para finalizar):");
        if (numero && numero.toLowerCase() === "salir") {
            continuar = false;
        } else if (!isNaN(numero) && numero.trim() !== "") {
            numeros.push(parseFloat(numero));
        } else {
            alert("Por favor, ingresa un número válido.");
        }
    }

    const suma = numeros.reduce((a, b) => a + b, 0);
    alert(`Los números ingresados son: ${numeros.join(", ")}\n\nSuma total: ${suma}`);
}
