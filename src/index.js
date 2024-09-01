/*
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

// Variáveis nome Herói, Bosses, Xp Herói com somo de Bosses e Nível Herói
let nomeheroi = "Diego";
let Boss1 = 5000;
let Boss2 = 950;
let Boss3 = 1200;
let xpHeroi = (Boss1 + Boss2 + Boss3);

let nivelHeroi;

if (xpHeroi  <= 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivelHeroi = "Imortal";
} else if (xpHeroi > 10001){
    nivelHeroi = "Radiante";
}

console.log("Derrotar 3 Bosses deu um total de: " + xpHeroi + " pontos de experiência");
console.log("O Herói de Nome " + nomeheroi + " está no nível " + nivelHeroi);



