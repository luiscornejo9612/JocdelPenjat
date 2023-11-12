function jocdelPenjatv2() {
    
    let partidasJugadas = 0;
    let partidasGanadas = 0;
    let partidasPerdidas = 0;

    do {
        var menu = parseInt(prompt("INGRESA UN NUMERO:" +
            "\n1 = Jugar " +
            "\n2 = Estadisticas " +
            "\n3 = Salir"));

        if (Number.isInteger(menu)) {
            if (menu === 1) {
                partidasJugadas++;
                let palabra = prompt("Ingresa la palabra");
                palabra = palabra.toUpperCase();
                var palabraEspacios = "";
                for (let index = 0; index < palabra.length; index++) {
                    palabraEspacios += palabra[index] + " ";
                }
                let arrayDeLetras = palabraEspacios.split('');

                var guiones = "";
                for (let i = 0; i < palabra.length; i++) {
                    guiones += "_" + " ";
                }
                console.log(guiones);
                let gionesArray = guiones.split('');
                var contador = 6;
                var posiciones = []; // Almacena las posiciones de la letra encontrada
                var palabraAdivinada = false;
                

                do {
                    var letra = prompt("Ingresa una letra");
                    letra = letra.toUpperCase();
                    if (letra.length !== 1 || !esLetra(letra)) {
                        console.log("Solo se admiten letras");
                    } else {
                        var exist = arrayDeLetras.includes(letra);
                        if (exist) {
                            for (let i = 0; i < arrayDeLetras.length; i++) {
                                if (arrayDeLetras[i] === letra) {
                                    posiciones.push(i); // Almacena la posición
                                    gionesArray[i] = letra;
                                }
                            }
                            let texto = gionesArray.join('');
                            console.log(texto);
                            
                            if (!gionesArray.includes('_')) {
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
            else if(menu === 2) {
                console.log("TOTAL DE PARTIDAS: " + partidasJugadas);
                console.log("PARTIDAS GANADAS: ( " + parseInt((partidasGanadas / partidasJugadas) * 100) + " % ): " + partidasGanadas);
                console.log("PARTIDAS PERDIDAS: ( " + parseInt((partidasPerdidas / partidasJugadas) * 100) + " % ): " + partidasPerdidas);

            }

        }else {
            console.log("Ingrese una opcion correcta.");
        }
    } while (menu !== 3);
}



function esLetra(caracter) {
    //verifica si el caracter es una letra (mayúscula o minúscula).
    var expresionRegular = /^[a-zA-Z]$/;
    // Usamos el método test para verificar si el caracter cumple con la expresión regular.
    return expresionRegular.test(caracter);
}





