var id = 1;

function Livro(titulo,autor,edicao){
	
	this.id = ++id;
	this.titulo = titulo;
	this.autor = autor;
	this.edicao = edicao;
}
