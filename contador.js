function contadorDeVogais(palavra) {
    const texto = palavra ? palavra.toLowerCase() : document.getElementById('texto').value.toLowerCase();
    const vogais = 'aeiou';
    const quantidade = texto.split('').filter(letra => vogais.includes(letra)).length;
    const resultado = document.getElementById('resultado');
    resultado ? resultado.textContent = quantidade.toString() : console.log(quantidade);
}
