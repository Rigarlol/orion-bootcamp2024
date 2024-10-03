function contadorDeVogais(palavra) {
    var texto = palavra ? palavra.toLowerCase() : document.getElementById('texto').value.toLowerCase();
    var vogais = 'aeiou';
    var quantidade = texto.split('').filter(function (letra) { return vogais.includes(letra); }).length;
    var resultado = document.getElementById('resultado');
    resultado ? resultado.textContent = quantidade.toString() : console.log(quantidade);
}
