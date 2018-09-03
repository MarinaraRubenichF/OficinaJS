//Exemplo Orientado a Objetos
function Aluno () {
 var nome;
 var idade;
 var curso;

  this.setNome = function (varNome) {
    this.nome = varNome;
  }

  this.setIdade = function (varIdade) {
    this.idade = varIdade;
  }

  this.setCurso = function (varCurso) {
    this.curso = varCurso;
  }

  this.getNome = function () {
    return this.nome;
  }

  this.getIdade = function () {
    return this.idade;
  }

  this.getCurso = function () {
    return this.curso;
  }

  this.mostraInfo = function () {
    console.log("Nome: " + this.nome + "\nIdade: " + this.idade + "\nCurso: " + this.curso);
  }
}

var Aluno = new Aluno();
 
Aluno.setNome("Fulano");
Aluno.setIdade("25");
Aluno.setCurso("Sistemas de Informação");
Aluno.mostraInfo();

//Utilizando Objetos Literais
var AlunoUm = function(nomeUm, idadeUm, cursoUm){
    return {
        nomeUm : nomeUm,
		idadeUm : idadeUm,
        cursoUm : cursoUm,
        mostraInfoUm: function(){
            console.log("Nome: " + this.nomeUm + "\nIdade: " + this.idadeUm + "\nCurso: " + this.cursoUm);
        }
    };
};

var alunoUm = AlunoUm("Beltrano", 22, "Ciência da Computação");
alunoUm.mostraInfoUm();