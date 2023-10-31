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
            }

        
        }else{
            console.log("ingrese una opción correcta");
        }
    } while (num !== 3);
    console.log("Haz salido el bucle");
}