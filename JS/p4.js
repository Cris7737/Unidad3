// Objeto que almacena el horario del semestre
const horario = {
    lunes: ["ARQUITECTURA DE COMPUTADORAS - 1:00 a 2:00", "SISTEMAS OPERATIVOS- 4:00 a 5:00", "PROGRAMACION WEB - 5:00 a 6:00", "ECUACIONES DIFERENCIALES - 7:00 a 8:00"],
    martes: ["ARQUITECTURA DE COMPUTADORAS - 1:00 a 2:00", "SISTEMAS OPERATIVOS - 4:00 a 5:00", "PROGRAMACION WEB - 5:00 a 6:00", "ECUACIONES DIFERENCIALES - 7:00 a 8:00"],
    miércoles: ["ARQUITECTURA DE COMPUTADORAS- 1:00 a 2:00", "SISTEMAS OPERATIVOS - 4:00 a 5:00", "PROGRAMACION WEB - 5:00 a 6:00", "ECUACIONES DIFERENCIALES - 7:00 a 8:00"],
    jueves: ["ARQUITECTURA DE COMPUTADORAS - 1:00 a 2:00", "SISTEMAS OPERATIVOS - 4:00 a 5:00", "PROGRAMACION WEB - 5:00 a 6:00", "ECUACIONES DIFERENCIALES - 7:00 a 8:00"],
    viernes: ["ARQUITECTURA DE COMPUTADORAS - 1:00 a 2:00", "SISTEMAS OPERATIVOS - 4:00 a 5:00", "PROGRAMACION WEB - 5:00 a 6:00", "ECUACIONES DIFERENCIALES - 7:00 a 8:00"],

    // Método para imprimir el horario completo
    imprimirHorario: function () {
        let resultado = "Horario del semestre:\n";
        for (const dia in this) {
            if (typeof this[dia] !== "function") {
                resultado += `\n${dia.toUpperCase()}:\n`;
                this[dia].forEach((clase) => {
                    resultado += ` - ${clase}\n`;
                });
            }
        }
        alert(resultado); // Mostrar el horario completo en una alerta
    },
};

// Función para ejecutar el método del objeto
function ejecutarHorario() {
    const confirmar = confirm("¿Deseas ejecutar el horario?");
    if (confirmar) {
        horario.imprimirHorario();
    } else {
        alert("No se ejecutó el horario.");
    }
}

// Objeto para gestionar calificaciones
const gestionCalificaciones = {
    calificaciones: [],

    // Método para pedir calificaciones al usuario
    pedirCalificaciones: function () {
        this.calificaciones = []; // Limpiar cualquier dato previo
        alert("Vamos a registrar las calificaciones de tus materias.");
        let continuar = true;
        while (continuar) {
            const calificacion = parseFloat(prompt("Ingresa una calificación (o escribe 'salir' para terminar):"));
            if (!isNaN(calificacion) && calificacion >= 0 && calificacion <= 100) {
                this.calificaciones.push(calificacion);
            } else if (isNaN(calificacion)) {
                continuar = false; // Terminar cuando el usuario escriba algo no numérico
            } else {
                alert("Por favor, ingresa una calificación válida entre 0 y 100.");
            }
        }
    },

    // Método para calcular la suma de las calificaciones
    calcularSuma: function () {
        return this.calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
    },

    // Método para calcular el promedio
    calcularPromedio: function () {
        const suma = this.calcularSuma();
        return (this.calificaciones.length > 0) ? (suma / this.calificaciones.length).toFixed(2) : 0;
    },

    // Método para mostrar resultados
    mostrarResultados: function () {
        const suma = this.calcularSuma();
        const promedio = this.calcularPromedio();
        alert(`Resultados:\n\nSuma de calificaciones: ${suma}\nPromedio: ${promedio}`);
        document.write(`<h1>Resultados de las calificaciones</h1>
            <p><strong>Suma:</strong> ${suma}</p>
            <p><strong>Promedio:</strong> ${promedio}</p>`);
    },
};

// Función principal para ejecutar el flujo del programa
function ejecutarPrograma() {
    const confirmar = confirm("¿Deseas registrar y calcular las calificaciones?");
    if (confirmar) {
        gestionCalificaciones.pedirCalificaciones();
        gestionCalificaciones.mostrarResultados();
    } else {
        alert("No se ejecutó el programa de calificaciones.");
    }
}
