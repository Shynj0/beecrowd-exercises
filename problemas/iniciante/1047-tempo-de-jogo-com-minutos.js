/*Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. 
A seguir calcule a duração do jogo. 
Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas. 
Entrada Quatro números inteiros representando a hora de início e fim do jogo. 
Saída Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .*/

const initHours = 7;
const initMinutes = 7;
const endHours = 7;
const endMinutes = 7;

function promptCalcPrint(hours, minutes){
    console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}

function gameTimeCalc(initHours, initMinutes, endHours, endMinutes) {
    // converte tudo para minutos
    let startTotal = initHours * 60 + initMinutes;
    let endTotal = endHours * 60 + endMinutes;

    // se o fim for menor ou igual ao início, soma 24h (jogo virou pro outro dia)
    if (endTotal <= startTotal) {
        endTotal += 24 * 60;
    }

    let duration = endTotal - startTotal;
    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;

    promptCalcPrint(hours, minutes);
}

gameTimeCalc(initHours, initMinutes, endHours, endMinutes);
