/*Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
Entrada
O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).
Saída
Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. 
Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".*/

let A = 5.0;
let B = 6.0 ;
let C = 7.0;
const pesoA = 2;
const pesoB = 3;
const pesoC = 5;

let passo1 = A*pesoA + B*pesoB + C*pesoC;
let media = passo1/(pesoA + pesoB + pesoC);

console.log(`MEDIA = ${media.toFixed(1)}`);