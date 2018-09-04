var x = 9, y = 3, resultado;

resultado = x + y;
console.log("\nResultado: "+resultado);

if(resultado == 12 && x == 9){
	resposta = "TRUE";
	console.log(resposta);
}
else{
	resposta = "FALSE";
	console.log(resposta);
}

resultado = (resultado == 12) ? "Acertou":"Errou";