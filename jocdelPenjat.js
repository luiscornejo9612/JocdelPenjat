function jocdelPenjat() {
    do {
        var num = parseInt(prompt("Ingresa un numero 1 = Jugar, 2 = Estadisticas, 3 = Salir")); 
        if (Number.isInteger(num)) {
            if (num === 1) {
                var palabra = prompt("Ingresa la palabra");
                var guiones = "";
                var palabraConGuiones = "";   
                for (let index = 0; index < palabra.length; index++) {
                    palabraConGuiones += palabra[index] + " ";
                }

                for (let i = 0; i < palabra.length; i++) {
                    guiones+="_"+" ";
                }
                console.log(guiones);
                var contador = 0;
                do {
                    var letras = prompt("Ingresa una letra");
                    var letrasArray = [];
                    if (letras.length !== 1 || !esLetra(letras)) {
                        console.log("Ingresa una única letra válida que no sea un número.");
                    }else{
                        letrasArray.push(letras);
                        for (let i = 0; i < palabraConGuiones.length; i++) {
                            if (palabraConGuiones[i] === letras) {
                                var resultat = guiones.substring(0, i) + letras + guiones.substring(i+1);
                                console.log(resultat);
                            }else{
                                console.log("La letra no se encuentra en la palabra");
                                contador++;
                            }          
                        }    
                    }                              
                } while (contador != 6);
                console.log("haz ganado");
            }       
        }else{
            console.log("ingrese una opción correcta");
        }
    } while (num !== 3);
    console.log("Haz salido el bucle");
}

function esLetra(caracter) {
   //verifica si el caracter es una letra (mayúscula o minúscula).
    var expresionRegular = /^[a-zA-Z]$/;
    // Usamos el método test para verificar si el caracter cumple con la expresión regular.
    return expresionRegular.test(caracter);
}

function name(letra, palabra, resultat) {
    letra = "";
    if (palabra[i] === letras) {
        var resultat = guiones.substring(0, i) + letras + guiones.substring(i+1);
        console.log(resultat);
    }
}