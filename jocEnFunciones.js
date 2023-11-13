let partidasJugadas = 0;
let partidasGanadas = 0;
let partidasPerdidas = 0;

function jugar() {
    partidasJugadas++;
    let palabra = prompt("Ingresa la palabra");
    // Resto del código relacionado con la opción de jugar
    palabra = palabra.toUpperCase();//Convertimos la palabra en mayúsculas
                var palabraEspacios = ""; //Se guarda la palabra añadiendo un espacio entre cada letra
                for (let index = 0; index < palabra.length; index++) {
                    palabraEspacios += palabra[index] + " ";
                }
                let arrayDeLetras = palabraEspacios.split('');//Palabra con espacios convertida a un array

                var guiones = ""; //Guiones ha mostrar al usuario
                for (let i = 0; i < palabra.length; i++) { 
                    guiones += "_" + " ";
                }

                console.log(guiones);
                let guionesArray = guiones.split(''); //Convertimos los guiones en un array
                var contador = 6; //Intentos permitidos 
                var posiciones = []; // Almacena las posiciones de la letra encontrada
                var palabraAdivinada = false;
                do {
                    var letra = prompt("Ingresa una letra");
                    letra = letra.toUpperCase();//Convertimos la palabra en mayúsculas
                    if (letra.length !== 1 || !esLetra(letra)) { //Comprueba que sea letra y solo admite un carácter
                        console.log("Solo se admiten letras");
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
                        }else {
                            contador--;
                            console.log("La letra no se encuentra en la palabra, te quedan " + contador + " intentos");
                            if (contador === 0) {
                                partidasPerdidas++;
                                console.log("¡HAS PERDIDO!");          
                            }
                        }                     
                    }
                } while (contador !== 0 );
}

function verEstadisticas() {
    console.log("TOTAL DE PARTIDAS: " + partidasJugadas);
    console.log("PARTIDAS GANADAS: (" + parseInt((partidasGanadas / partidasJugadas) * 100) + "%): " + partidasGanadas);
    console.log("PARTIDAS PERDIDAS: (" + parseInt((partidasPerdidas / partidasJugadas) * 100) + "%): " + partidasPerdidas);
}

function menu() {
    do {
        var menu = parseInt(prompt("INGRESA UN NUMERO:" +
            "\n1 = Jugar " +
            "\n2 = Estadisticas " +
            "\n3 = Salir"));

        if (Number.isInteger(menu)) {
            if (menu === 1) {
                jugar();
            } else if (menu === 2) {
                verEstadisticas();
            }
        } else {
            console.log("Ingrese una opción correcta.");
        }
    } while (menu !== 3);
}

function esLetra(caracter) {
    //verifica si el caracter es una letra (mayúscula o minúscula).
    var expresionRegular = /^[a-zA-Z]$/;
    // Usamos el método test para verificar si el caracter cumple con la expresión regular.
    return expresionRegular.test(caracter);
}