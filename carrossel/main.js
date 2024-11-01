let indiceAtual = 0; //Indice da imagem atual //imagem que está atual no slide
const slides = document.querySelectorAll('.slide'); //guarda todo mundo que tem a classe slide no html
const totalSlides = slides.length; //totalSlides= conta quantas coisas tem a classe slide //const= não troca //let= troca o valor
const intervalo = 5000; //5 segundos //javascript conta em milissegundos //const- mantém um padrão

//Função para mostrar os slides
function mostrarSlide(Indice){
    const carosselSlides = document.
    querySelector('carrossel'); //pegue um elemento pela classe (no caso, a classe carrossel)

    carosselSlides.style.transform = `translateX(-${indice * 100}%)`//style=css //2 ponto= oq do css vc quer mexer? 
}
    //Avançar manualmente para o slide anterior
    function anterior(){ //ele guarda o código, e so executa
        indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides; //% = resto, seria a divisão
        mostrarSlide(indiceAtual);
    }

    //Avançar manualmente para o próximo slide
    function proximo(){
        indiceAtual = (indiceAtual + 1) %totalSlides;
        mostrarSlide(indiceAtual);
    }
    //Carrossel passar sozinho com tempo
    function Avançar(){
        indiceAtual = (indiceAtual + 1) %totalSlides;
        mostrarSlide(indiceAtual);
    }
    //Intervalo para auto avançar o slide
    setInterval(Avançar, intervalo); //set = fazer //get = pegar