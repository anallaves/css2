window.addEventListener('load', () => {
    const carregamento = document.getElementById("carregamento") //id = getelementbyId
    const inicio = document.querySelector(".inicio") //classe = querySelector

    carregamento.classList.add('troca') //carregamento.classList = quais são suas classes? //.add('troca') = adicionou a classe troca

    //Definindo um tempo para renovar a classe troca da tela de carregamento
    setTimeout(() => {
        carregamento.style.display = 'none';
        inicio.style.display = 'block';
    }, 2000); //Para esperar o 1s da animação //milissegundo
})