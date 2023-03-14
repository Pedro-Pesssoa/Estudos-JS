let n1 = parseInt( prompt('Digite um valor que será elevado ao cubo: '));
//pow eleva o numero ao cubo
let cubo = Math.pow(n1, 3);
console.log(`${n1} ao cubo é ${cubo}`);

let n2 = parseInt( prompt('Digite um  valor que será tirada a raiz: '));
//sqrt mostra a raiz
let raiz = Math.sqrt(n2);
console.log(`A raiz de ${n2} é ${raiz}`);

let vetor  = [9, 0, 8, 1, 7, 190, 12, 87, -10, -200, 14, 1];
//...vetor pega o vetor inteiro 
console.log(Math.max(...vetor));