function contadorDeVogais(palavra?: string): void {
    const texto = palavra ? palavra.toLowerCase() : (document.getElementById('texto') as HTMLInputElement).value.toLowerCase();

    const vogais = 'aeiou'; 
    const quantidade = texto.split('').filter(letra => vogais.includes(letra)).length;

    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    resultado ? resultado.textContent = quantidade.toString() : console.log(quantidade);
}
