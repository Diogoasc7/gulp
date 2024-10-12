// Funções de operações aritméticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

// Exemplo de uso
const numero1 = 10;
const numero2 = 5;

console.log("Soma: " + soma(numero1, numero2)); // 15
console.log("Subtração: " + subtracao(numero1, numero2)); // 5
console.log("Multiplicação: " + multiplicacao(numero1, numero2)); // 50
console.log("Divisão: " + divisao(numero1, numero2)); // 2
