function contadorDeVogais(): void {
    const palavra = (document.getElementById('texto') as HTMLInputElement).value.toLowerCase();

    const vogais = 'aeiou'; 

    const quantidadeVogais = palavra.split('').filter(letra => vogais.includes(letra)).length;

    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    resultado.textContent = quantidadeVogais.toString();
}
