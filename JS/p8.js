document.addEventListener('DOMContentLoaded', () => {
    // Función suma: Suma dos números y devuelve el resultado
    const suma = (num1, num2) => {
        return num1 + num2;
    };

    // Función para determinar si un número es par
    const esPar = (numero) => {
        return numero % 2 === 0;
    };

    // Función para obtener nombres de una lista de objetos
    const obtenerNombres = (arr) => {
        return arr.map(item => item.nombre); // Usamos .map para extraer los nombres
    };

    // Función para practicar con map (ejemplo)
    const practicarMap = (arr) => {
        return arr.map(item => item * 2); // Doble cada elemento del array
    };

    // Datos de ejemplo para las funciones
    const listaDePersonas = [
        { nombre: 'Juan', edad: 30 },
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 35 },
        { nombre: 'Laura', edad: 28 }
    ];

    // Evento para la suma de dos números
    document.getElementById('suma-btn').addEventListener('click', () => {
        const resultado = suma(5, 7); // Ejemplo de suma
        document.getElementById('resultado-suma').textContent = `El resultado de la suma es: ${resultado}`;
    });

    // Evento para determinar si un número es par
    document.getElementById('esPar-btn').addEventListener('click', () => {
        const resultado = esPar(10); // Ejemplo de número par
        document.getElementById('resultado-par').textContent = `El número es par: ${resultado}`;
    });

    // Evento para obtener los nombres de una lista de objetos
    document.getElementById('nombres-btn').addEventListener('click', () => {
        const nombres = obtenerNombres(listaDePersonas); // Llamada a la función
        document.getElementById('resultado-nombres').textContent = `Los nombres son: ${nombres.join(', ')}`;
    });

    // Evento para practicar con `map`
    document.getElementById('map-btn').addEventListener('click', () => {
        const numeros = [1, 2, 3, 4, 5];
        const resultadoMap = practicarMap(numeros); // Practicar map
        document.getElementById('resultado-map').textContent = `El resultado de map es: ${resultadoMap.join(', ')}`;
    });
});
