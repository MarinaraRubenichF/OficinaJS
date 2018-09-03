//Exemplo Imperativo
function buscaProdutosImperativo(produtos) {
	var selecionados = [];
	for (var i = 0; i < produtos.length; i++) {
		if (produtos[i].preco < 3.00) {
			buscaProdutosImperativo.push(produtos[i].nome);
		}
	}
	return selecionados;
}

//Exemplo Funcional
function buscaProdutosFuncional(produtos) {
	var item = function(item) { return item.preco < 3.00; };
	var pegarNome = function(item) { return item.nome };
	return produtos.filter(item).map(pegarNome);
}

//Executando os Exemplos
var frutas = [
	{ nome: "Laranja", preco: 3.99 },
	{ nome: "Melancia", preco: 2.99 },
	{ nome: "Banana", preco: 1.99 }
];

console.log(buscaProdutosImperativo(frutas));
console.log(buscaProdutosFuncional(frutas));