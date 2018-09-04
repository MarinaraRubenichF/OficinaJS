class Estudante {
	constructor (aluno, curso) {
    	this.aluno = aluno;
    	this.curso = curso;
	}

	displayInfo() {
		console.log(`${this.aluno} é aluno de ${this.curso}.`);
	}
}

const Fulano = new Estudante('Fulano', 'Sistemas de Informação');
const Beltrano = new Estudante('Beltrano', 'Ciência da Computação');
