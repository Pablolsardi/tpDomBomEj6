let temporizador;
let milisegundos = 0;
let tiempoFijado = 0;

const fijarTiempo = (e) => {
    e.preventDefault();
    const getTiempo = document.getElementById('inputSeg').value;
    tiempoFijado = getTiempo * 1000;
    milisegundos=tiempoFijado;
    actualizarTiempo();
    botonesStopped();
}

function play() {
    temporizador = setInterval(function () {
        milisegundos -= 10; // Decrementar en 10 para contar hacia abajo en centésimos de segundo
        if (milisegundos < 0) {
            milisegundos = 0;
            pause();
            botonesStopped();
        }
        actualizarTiempo();
    }, 10); // Intervalo de 10 milisegundos para centésimos de segundo

    botonesRuning();
}


function pause() {
    clearInterval(temporizador);
    botonesPaused();
}

function reset() {
    milisegundos = 0;
    clearInterval(temporizador);
    actualizarTiempo();
    botonesStopped();
}

function actualizarTiempo() {
    const minutos = Math.floor(milisegundos / (1000 * 60));
    const segundos = Math.floor((milisegundos % (1000 * 60)) / 1000);
    const centesimos = (milisegundos % 1000) / 10;

    const time = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')},${Math.floor(centesimos).toString().padStart(2, '0')}`

    document.getElementById('numeros').innerText = time;
}

function playAgain() {
    play();
}

const botonesRuning = () => {
    const section = document.getElementById('contendorBotones');
    section.innerHTML = '<button id="buttonReset" class="btn btn-danger mx-2" onclick="reset()"><i class="fa-solid fa-rotate-left"></i></button> <button id="buttonPause" class="btn btn-dark mx-2" onclick="pause()"><i class="fa-solid fa-pause"></i></button>'
}

const botonesStopped = () => {
    const section = document.getElementById('contendorBotones');
    section.innerHTML = '<button id="buttonPlay" class="btn btn-success mx-2" onclick="play()"><i class="fa-solid fa-play"></i></button>'
}

const botonesPaused = () => {
    const section = document.getElementById('contendorBotones');
    section.innerHTML = '<button id="buttonReset" class="btn btn-danger mx-2" onclick="reset()"><i class="fa-solid fa-rotate-left"></i></button> <button id="buttonPlayAgain" class="btn btn-dark mx-2" onclick="playAgain()"><i class="fa-solid fa-play"></i></button>'
}
