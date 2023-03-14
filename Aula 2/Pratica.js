const nomeCompleto = prompt('Digite seu nome completo: ');
const anoNascimento = parseInt(prompt('Digite o ano de nascimento: '));
const salarioMensal = parseFloat (prompt('Digite o seu salario mensal em reais: '));
const qtdFilhos = parseInt(prompt('Digite a quantidade de filhos que você possui: '));

const idade = 2023 - anoNascimento;
const aposentar = ((70 - idade) * 12)* salarioMensal;
const divFilhos = (salarioMensal*0.10/qtdFilhos);

alert(`Olá, ${nomeCompleto}, tudo bem? Você tem ${idade} anos de idade, seu salário é R$ 
    ${salarioMensal.toFixed(2)} e receberá R$ ${aposentar.toFixed(2)} ate se aposentar. Caso 
    você deseje dividir seu salário entre os seus filhos, dara R$ ${divFilhos.toFixed(2)} para cada um.`);