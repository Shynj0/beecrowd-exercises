/*Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
MaiorAB = (a + b + Math.abs(a - b)) / 2;
Obs.: a fórmula apenas calcula o maior entre os dois primeiros(a e b).Um segundo passo, portanto é necessário para chegar no resultado esperado.
    
Entrada
O arquivo de entrada contém três valores inteiros.
    Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".*/


let a = 7;
let b = 14;
let c = 106;

let MaiorAB = (a + b + Math.abs(a - b)) / 2;
let MaiorValor = (c + MaiorAB + Math.abs(c - MaiorAB)) / 2;

console.log(`eh o maior ${MaiorValor}`);