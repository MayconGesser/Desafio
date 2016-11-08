function ServicoOrdenacao(){
	this.ordenar = function(livros,ordens){

		var ordenacao = ordens.ordenacao;
		var primeira_ordenacao = ordenacao.slice(0,2);
		var segunda_ordenacao = ordenacao.slice(2,4);
		var terceira_ordenacao = ordenacao.slice(4,6);

		if(primeira_ordenacao == '' && 
			segunda_ordenacao == '' &&
			terceira_ordenacao == ''){
			throw "OrderingException: Favor fornecer uma ordenação válida.";
		}

		var retorno = livros.sort(
				firstBy(parametros[primeira_ordenacao])	
				.thenBy(parametros[segunda_ordenacao])	//eventuais strings vazias sao ignoradas (testado)
				.thenBy(parametros[terceira_ordenacao])
			);

		return retorno;
	}
}

var servicoOrdenacao = new ServicoOrdenacao();