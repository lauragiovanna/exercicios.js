//faça um programa que gere um numero aleatorio entre 1 e 10 ,esse numero é o numero ganhador , 
//entao ele tambem ira gerar um numero aleatorio entre 1 e 10 e verifica se a pessoa ganhou ou nao ,em caso deter ganhado mostra o premio ,se nao ganhou mostra outra mensagem.

const randomnumber= Math.floor(Math.random() * (10-1) + 1) // criamos o nome da nossa variavel
//colocamos o math floor para arredondar e em seguida o math random porque precisamos de um numero aleatorio de 1 a 10
//denominamos que o 10 é o maximo e o 1 é o minimo.
const winningnumber= Math.floor( Math.random() * (10-1) + 1 )

if(randomnumber=== winningnumber){
    console.log("voce ganhou")// declaramos que se o random for igual ao wining vai imprimir uma mensagem que voce ganhou
}
else{
    console.log ("voce perdeu") // se caso as duas variaveis nao for igual no valor vai imprimir uma mensagem falando que perdeu.
}