// Função para gerar um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Exemplo de uso
const minimo = 1;
const maximo = 100;
const numeroAleatorio = gerarNumeroAleatorio(minimo, maximo);

console.log("Número aleatório entre " + minimo + " e " + maximo + ": " + numeroAleatorio);
