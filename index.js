let resultado = calcularNivel(vitorias = 90, derrotas = 10); // resultado da conta 
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`); // o ponto após o resultado é parametro para juntar os dois valores no console.log
function calcularNivel(vitorias, derrotas){ // parametro da function
    let saldoVitorias = vitorias - derrotas // subtração para o let acima e variável guardada devido ao return
    let nivel; // variaveis guardadas devido ao return

    if(vitorias < 10){
        nivel = "Ferro"
    }else if (vitorias > 10 && vitorias <= 20){
        nivel = "Bronze"
    }else if(vitorias > 20 && vitorias <= 50){
        nivel = "Prata"
    }else if (vitorias > 50 && vitorias <=80){
        nivel = "Ouro"
    }else if(vitorias > 80 && vitorias <=90){
        nivel = "Diamante"
    }else if(vitorias > 90 && vitorias <=100){
        nivel = "Lendário"
    }else if(vitorias => 101){
        nivel = "Imortal"
    }

    return {saldoVitorias, nivel};
}
