function dividir(valor1,valor2) {
    return valor1 / valor2
}
function somar (valor1,valor2){
    return valor1 + valor2
}
function diminuir (valor1,valor2){
    return valor1 - valor2
}
function multiplicar (valor1,valor2){
    return valor1 * valor2
}
function handleBtdivi() {
    const v1 = parseInt(document.getElementById('valor1')).value
    const v2 = parseInt(document.getElementById('valor2')).value
    document.getElementById("Resultado").innerHTML = dividir(v1,v2)
}
function handleBtmult() {
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    document.getElementById("Resultado").innerHTML = multiplicar(v1,v2)
}
function handleBtsomar() {
    const v1 = parseInt(document.getElementById('valor1')).value
    const v2 = parseInt(document.getElementById('valor2')).value
    document.getElementById("Resultado").innerHTML = somar(v1,v2)
}
function handleBtdiminuir() {
    const v1 = parseInt(document.getElementById('valor1')).value
    const v2 = parseInt(document.getElementById('valor2')).value
    document.getElementById("Resultado").innerHTML = diminuir(v1,v2)
}

document.getElementById('Btmult').addEventListener('click',handleBtmult)
document.getElementById('Btsomar').addEventListener('click',handleBtsomar)
document.getElementById('Btdivi').addEventListener('click',handleBtdivi)
document.getElementById('Btdiminuir').addEventListener('click',handleBtdiminuir)