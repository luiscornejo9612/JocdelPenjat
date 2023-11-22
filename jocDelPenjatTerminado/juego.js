let palabraDos;

let contadorErrores = 0; //cuantas veces me equivoqué
let contadosAciertos = 0; //cuantas letras acerté

let partidasJugadas = 0;
let partidasGanadas = 0;
let partidasPerdidas = 0;

const palabras = [];

const boton = id('jugar');
//const btnEstadisticas = id('estadisticas');
const imagen = id( 'imagen' );
const botonLetra = document.querySelectorAll( "#letras button" );

/* click en iniciar partida */
boton.addEventListener('click', iniciar );

//btnEstadisticas.addEventListener('click', estadisticas );

function iniciar(event){
    partidasJugadas++;
    imagen.src = 'img_penjat-20231114T004755Z-001/penjat_0.png';
    boton.disabled = true;
    contadorErrores = 0;
    contadosAciertos = 0; 
    const palabraIngresada = prompt("Ingrese una nueva palabra:");
    // Agregar la nueva palabra al array
    palabras.push(palabraIngresada);
    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 
    
    var numPlabras = palabras.length;
    
    palabraDos = palabras[ numPlabras-1 ];
    console.log( palabraDos );
    const contadorLetras = palabraDos.length;

    for( let i = 0; i < botonLetra.length ; i++ ){
        botonLetra[ i ].disabled = false;
    }

    for( let i = 0; i < contadorLetras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < botonLetra.length ; i++ ){
    botonLetra[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    
    const letra = button.innerHTML.toUpperCase( );
    const palabra = palabraDos.toUpperCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            contadosAciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        contadorErrores++;
        const source = `img_penjat-20231114T004755Z-001/penjat_${contadorErrores}.png` ;
        imagen.src = source;
    }

    if( contadorErrores == 6 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabraDos;
        partidasPerdidas++;
        gameOver( );
    }else if( contadosAciertos == palabraDos.length ){
        partidasGanadas++;
        id('resultado').innerHTML = "GANASTE!";
        gameOver( );
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}


/* fin del juego */
function gameOver( ){
    for( let i = 0; i < botonLetra.length ; i++ ){
        botonLetra[ i ].disabled = true;
    }

    boton.disabled = false;
}

function estadisticas() {
    // Calcular el porcentaje de partidas ganadas y perdidas
    var porcentajeGanadas = parseInt((partidasGanadas / partidasJugadas) * 100);
    var porcentajePerdidas = parseInt((partidasPerdidas / partidasJugadas) * 100);

    // Concatenar la información en un solo mensaje
    var mensaje = "TOTAL DE PARTIDAS: " + partidasJugadas + "\n" +
        "PARTIDAS GANADAS (" + porcentajeGanadas + "%): " + partidasGanadas + "\n" +
        "PARTIDAS PERDIDAS (" + porcentajePerdidas + "%): " + partidasPerdidas;

    // Mostrar el mensaje en un alert
    alert(mensaje);
}


function id( str ){
    return document.getElementById( str );
}


gameOver( );