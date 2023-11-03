function jocdelPenjat() {
    do {
        var num = parseInt(prompt("Ingresa un numero 1 = Jugar, 2 = Estadisticas, 3 = Salir")); 
        if (Number.isInteger(num)) {
            if (num === 1) {
                var palabra = prompt("Ingresa la palabra");
                var longitud = palabra.length;
                var numLetras = "";
                for (let i = 0; i < longitud; i++) {
                    numLetras+=" _";
                }
                console.log(numLetras)
                var contador = 0;
                do {
                    letra = prompt("Ingresa una letra");
                
                    if (letra.length !== 1 || !esLetra(letra)) {
                        console.log("Ingresa una única letra válida que no sea un número.");
                    }
                    else{
                        var exist = palabra.includes(letra);
                        for (let i = 0; i < longitud; i++) {
                            if (exist != false) {
                                console.log(letra);
                                
                            }
                        }
                        contador++;
                    }
                    

                } while (contador != 6);
                


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