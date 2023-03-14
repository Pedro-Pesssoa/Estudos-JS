let num = parseInt( prompt('Digite um valor que será elevado ao cubo: '));
let cubo = Math.pow(num, 3);
console.log(`${num} ao cubo é ${cubo}`);


let vetor  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...vetor));