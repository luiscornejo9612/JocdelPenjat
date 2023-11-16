let partidasJugadas = 0;
let partidasGanadas = 0;
let partidasPerdidas = 0;

function jugar() {
    partidasJugadas++;
    var menu = 1;
    if (Number.isInteger(menu)) {
        if (menu === 1) {
            let palabra = prompt("Ingresa la palabra");
            palabra = palabra.toUpperCase();//Convertimos la palabra en mayúsculas
            var palabraEspacios = ""; //Se guarda la palabra añadiendo un espacio entre cada letra
            for (let index = 0; index < palabra.length; index++) {
                palabraEspacios += palabra[index] + " ";
            }
            let arrayDeLetras = palabraEspacios.split('');//Palabra con espacios convertida a un array

            var resultadoDiv = document.getElementById("guiones");
            resultadoDiv.textContent = generarGuiones(palabra);
            var guiones = generarGuiones(palabra);
            console.log(guiones);
            let guionesArray = guiones.split(''); //Convertimos los guiones en un array
            var contador = 6; //Intentos permitidos 
            var posiciones = []; // Almacena las posiciones de la letra encontrada
            var palabraAdivinada = false;
            do {
                var letra = prompt("Ingresa una letra");
                letra = letra.toUpperCase();//Convertimos la palabra en mayúsculas
                if (letra.length !== 1 || !esLetra(letra)) { //Comprueba que sea letra y solo admite un carácter
                    console.log("Solo ingresa una letra");
                } else {
                    var exist = arrayDeLetras.includes(letra);//Comprueba que letra ingresada se encuentre en la palabra
                    if (exist) {
                        for (let i = 0; i < arrayDeLetras.length; i++) {
                            if (arrayDeLetras[i] === letra) {
                                posiciones.push(i); // Almacena la posición
                                guionesArray[i] = letra;
                            }
                        }
                        let texto = guionesArray.join('');
                        console.log(texto);

                        if (!guionesArray.includes('_')) {
                            palabraAdivinada = true;
                            console.log("¡HAS GANADO!")
                            partidasGanadas++;
                            break; // Salir del bucle si se adivinó la palabra
                        }
                    } else {
                        contador--;
                        console.log("La letra no se encuentra en la palabra, te quedan " + contador + " intentos");
                        if (contador === 0) {
                            partidasPerdidas++;
                            console.log("¡HAS PERDIDO!");
                        }
                    }
                }
            } while (contador !== 0);
            menu--;
        }
    }

}

function verEstadisticas() {
    var menu = 2;
    if (menu === 2) {
        console.log("TOTAL DE PARTIDAS: " + partidasJugadas);
        console.log("PARTIDAS GANADAS: (" + parseInt((partidasGanadas / partidasJugadas) * 100) + "%): " + partidasGanadas);
        console.log("PARTIDAS PERDIDAS: (" + parseInt((partidasPerdidas / partidasJugadas) * 100) + "%): " + partidasPerdidas);
        menu--;
    }
}

function esLetra(caracter) {
    //verifica si el caracter es una letra (mayúscula o minúscula).
    var expresionRegular = /^[a-zA-Z]$/;
    // Usamos el método test para verificar si el caracter cumple con la expresión regular.
    return expresionRegular.test(caracter);
}

function generarGuiones(palabra) {
    var guiones = ""; // Guiones a mostrar al usuario
    for (let i = 0; i < palabra.length; i++) {
        guiones += "_" + " ";
    }
    return guiones;
}

function botonesAbc() {
    // Obtener el contenedor donde se agregarán los botones
    var contenedor = document.getElementById("botones-abc");

    // Crear un array con las letras del alfabeto
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    // Iterar sobre cada letra y crear un botón para ella
    alfabeto.forEach(function (letra) {
        var boton = document.createElement("button");
        boton.textContent = letra;
        
        boton.addEventListener("click", function() {
            // Llamar a la función insertarLetra y pasar la letra como argumento
            var letraPresionada = insertarLetra(letra);
            console.log("Letra seleccionada: " + letraPresionada);
        });

        contenedor.appendChild(boton);
    });
}
document.addEventListener("DOMContentLoaded", botonesAbc);

function insertarLetra(letra) {
    return letra;
}



