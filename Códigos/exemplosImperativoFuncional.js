//Exemplo Imperativo
function buscaAlunosImperativo(alunos) {
	var selecionados = [];
	for (var i = 0; i < alunos.length; i++) {
		if (alunos[i].idade < 18) {
			selecionados.push(alunos[i].nome);
		}
	}
	return selecionados;
}

//Exemplo Funcional
function buscaAlunosFuncional(alunos) {
	var info = function(info) { return info.idade < 18; };
	var pegarNome = function(info) { return info.nome };
	return alunos.filter(info).map(pegarNome);
}

//Executando os Exemplos
var infos = [
	{ nome: "Fulano", idade: 25 },
	{ nome: "Cicrano", idade: 16 },
	{ nome: "Beltrano", idade: 22 }
];

console.log(buscaAlunosImperativo(infos));
console.log(buscaAlunosFuncional(infos));