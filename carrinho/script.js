let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let totalCarrinho = calcularTotal();

//JSON = bloco de notas do javascript, como se fosse um banco d dados
//JSON = JavaScript Object Notation
//getItem = guardar, ele guarda as informações no bloco d notas

//Adicionar item ao carrinho e guardar ele no localStorage
function adicionarAoCarrinho(nome, preco, imagem) {
    const novoItem = {nome, preco, imagem}; //criando uma cópia, e guardando o nome, preço e imagem
    carrinho.push(novoItem); //push = empurrar, empurrou pra cima adicionou mais uma linha
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); //ta pegando as informações e guardando no banco d dados
}

// Calcula o total do carrinho
function calcularTotal() {
    return carrinho.reduce((soma, item) => soma + item.preco, 0); //return = retornar //retoma o preço d todos os itens do carrinho //reduce = arredonda o número pra não ficar grande no visor
}
// Função para atualizar a página do carrinho com os produtos 
function Atualizar() {
    const elementoCarrinho = document.getElementById('carrinho');
    const elementoTotal = document.getElementById('total');

    if(carrinho.lenght === 0) {
        elementoCarrinho.innerHTML = '<p>Seu carrinho está vazio</p>' //iinerHTML = mostrar o html
    } else {
        elementoCarrinho.innerHTML = ''
        carrinho.forEach((item) => { //forEach createElement div= Para cada item do carrinho, ele cria uma div
            const itemCarrinho = document.createElement('div');
            itemCarrinho.classList.add = 'itemCarrinho';
            itemCarrinho.innerHTML = `
            <img src="${item.imagem}" class="imagemCarrinho">
            <div>
            <p>${item.nome}</p>
            <p>R$ ${item.preco}</p>
            </div>`;
            elementoCarrinho.appendChild(itemCarrinho);

        });
    }
    elementoTotal.textContent = totalCarrinho.toFixed(2);
}


if(window.location.pathname.includes('carrinho.html')) {
    Atualizar();
}