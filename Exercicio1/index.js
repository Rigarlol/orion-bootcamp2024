function contadorDeVogais() {
    var palavra = document.getElementById('texto').value.toLowerCase();
    var vogais = 'aeiou';
    var quantidadeVogais = palavra.split('').filter(function (letra) { return vogais.includes(letra); }).length;
    var resultado = document.getElementById('resultado');
    resultado.textContent = quantidadeVogais.toString();
}
