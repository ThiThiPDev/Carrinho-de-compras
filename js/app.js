//alert("Hello World");

let totalGeral;
limpar();

function adicionar () {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1]; 
    let quantidade = document.getElementById('quantidade').value; 
    if (quantidade > 50) {
      alert('A quantidade máxima é 50.');
    } else if (quantidade < 1) {
      alert('A quantidade mínima é 1.')
    return;
    }

    // verificar se o produto já está no carrinho
    let produtos = document.querySelectorAll('.carrinho__produtos__produto');

    for (let item of produtos) {
        if (item.textContent.includes(nomeProduto)) {
            alert('Esse produto já está no carrinho.');
            document.getElementById('quantidade').value = '';
            return;
        }
    }
    
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = '';

}

function limpar () {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}

