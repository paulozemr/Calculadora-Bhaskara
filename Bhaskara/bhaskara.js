function delta(a,b,c){
    return Math.pow(b, 2) - (4*(a*c))
}
function baskara(a,b,c){
    const valorDelta = delta(a,b,c)
    if (valorDelta < 0)
        return({valor_x1:'Inexistente',valor_x2:'Inexistente'})
    else {
     const x1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
     const x2 = (-b - Math.sqrt(valorDelta)) / (2 * a)
     return ({valor_x1: x1,valor_x2:x2})   
    }
}

function handleBtcalcular() {
    const vA = document.getElementById('vA').value
    const vB = document.getElementById('vB').value
    const vC = document.getElementById('vC').value
    const raizes = baskara(vA,vB,vC)
    document.getElementById('resultado1').value = raizes.valor_x1
    document.getElementById('resultado2').value = raizes.valor_x2
}

document.getElementById('Btcalcular').addEventListener('click',handleBtcalcular)