var puntos = 0;
var cantidadClics = 0;
var texto = '';

console.log('Extension loaded... waiting for points');

function actualizarTexto() {
    puntos += 50;
    cantidadClics++;
    texto = 'Llevas un total de ' + cantidadClics + ' clics hechos y un total de ' + puntos + ' puntos.';
    console.log(texto);
}

function hacerClicEnBoton() {
    const boton = document.querySelector('button[aria-label="Reclamar bonificación"]');
    if (boton) {
        boton.click();
        actualizarTexto();
    }
}

const intervalo = setInterval(hacerClicEnBoton, 1000);
