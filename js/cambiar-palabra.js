let listoCantidad = 0;
let botonListo = document.getElementById('boton-listo');
botonListo.addEventListener('click', cambiarPalabra);
function cambiarPalabra() {
    let nuevaPalabra = document.getElementById('input-nueva-palabra');
    if (!nuevaPalabra.value) {
        animacion(nuevaPalabra, 'input-obligatorio', 2000)
        animacion(botonListo, 'boton-temblar', 2000)
        return
    }
    if(restricciones(nuevaPalabra.value)){
        alert(restricciones(nuevaPalabra.value))
        return
    }
    dibujarCuerpo(8);
    let letrasFallidas = document.querySelector('.jugando__mostrar-fallidas');
    let palabraOculta = document.querySelector('.jugando__mostrar-palabra');
    letrasFallidas.innerHTML = '';
    palabraOculta.innerHTML = '';
    let palabra = Array.from(nuevaPalabra.value.toUpperCase());
    palabra.forEach(letra => crearElemento(letra, palabraOculta, 'p', 'jugando__mostrar-palabra--letras'));
    document.querySelector(".modal.modal-visible").classList.remove(visible);
    let saltarEvento = true;
    let intentos = 8;
    ahorcado(intentos, saltarEvento)
    listoCantidad++;
    setTimeout(() => nuevaPalabra.value = '', 500);
}