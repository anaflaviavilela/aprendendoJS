alert ("Boas vindas ao nosso site!");

let idade;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos.";

alert (mensagemDeErro);
let nome = prompt('Qual seu nome?');
idade = prompt('Qual sua idade?');

if (idade >= 18){
    alert ("Pode tirar a habilitação!");
} else {
    alert ("Não pode tirar a habilitação!");
}


