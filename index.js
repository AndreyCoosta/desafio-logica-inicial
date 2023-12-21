let nome = "DIO"
let xp = 9001
let rank = ""
if (xp <= 1000){
    rank = "Ferro"
} else if (xp >= 1001)  {
    rank = "Bronze"
} if (xp >= 2001) {
    rank = "Prata"
} if (xp >= 5000) {
    rank = "Ouro"
} if (xp >= 7001) {
    rank = "Platina"
} if (xp >= 8001) {
    rank = "Ascendente"
} if (xp >= 9001) {
    rank = "Imortal"
} if (xp >= 10001){
    rank = "Radiante"
} 

console.log("O Herói de nome " + nome + " está no nível de " + rank)
