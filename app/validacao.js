function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero))
        elementoChute.innerHTML += ` 
        <div>Valor Fale um numero entre ${menorValor} e ${maiorValor}</div>
        `
    if (numero === numeroSecreto) {
        document.body.innerHTML = ` 
                    <h2>VOCÊ ACERTOU!!!!!</h2>
                    <h3> O numero secreto era ${numeroSecreto}!</h3>
                    <button id="reinicia" class="btn-reinicia"> Reinicia </button> 
                `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

const botaoReinicia = document.getElementById("reinicia")

document.body.addEventListener("click", e =>{
    if (e.target.id == 'reinicia'){
        window.location.reload()
    }
})