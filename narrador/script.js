function iniciarNarracao() {
    setTimeout(narrarTexto(), 3000)
    //Quando o site iniciar espera três segundos para iniciar a narração
}

function narrarTexto () {
    const texto = document.getElementById("texto").innerText; //getelementbyid = pegar uma caixa //innertext= ver o conteúdo da caixa
    const narrador = new SpeechSynthesisUtterance(texto) //ativar narrador

    narrador.lang = 'pt-br'; //Define o idioma
    narrador.rate = 1; //Velocidade da fala
    narrador.pitch = 1; //Tom de voz

    window.speechSynthesis.speak(narrador)

}