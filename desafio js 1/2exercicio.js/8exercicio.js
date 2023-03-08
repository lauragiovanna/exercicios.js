//crie 5 projetos nesse formato nome: sexo: profissao: nacionalidade: 
// ao rodar o programa ,deve imprimir se a pessoa é aprovada ou nao no processo , a pessoa deve ser  maior de idade e brasileira pra ser aprovada 


const personone={ name: 'laura', age: 21 , sexo: 'feminino', profession: 'desenvolvedora frontend',nationality: 'brasileira' }
const persontwo={ name:'icaro', age: 17, sexo:'masculino', profession: 'web designer' ,nationality: 'argentina'}
const personthree={ name:'zezito', age: 18, sexo:'masculino', profession: 'corretor de imoveis' ,nationality: 'uruguai'}
const personfor={ name:'tania', age: 15, sexo:'feminino', profession: 'baba' ,nationality: 'brasileira'}
const personfive={ name:'dora', age: 12, sexo:'feminino', profession: 'aposentada' ,nationality: 'brasileira'} // aqui definimos idade de cada um 

if(personone.age>= 18 && (personone.nationality === 'brasileira'|| personone.nationality=== 'brasileiro')){
    console.log('voce passou no processo') // aqui estamos falando pro computador se a idade da primeira pessoa for maior ou igual a 18 e a nacionalidade dela for brasileira ou brasileiro ela sera aprovada
// se caso nao for , nao sera aprovada ,fizemos isso com todos os 5 .
}
else{
    console.log('voce nao passou no processo')
}
if(personone.age>= 18 && persontwo.nationality === 'brasileira'){
    console.log('voce passou no processo')

}
else{
    console.log('voce nao passou no processo')
}
if(personone.age>= 18 && personthree.nationality=== 'brasileira'){
    console.log('voce passou no processo')

}
else{
    console.log('voce nao passou no processo')
}
if(personone.age>= 18 && personfor.nationality=== 'brasileira'){
    console.log('voce passou no processo')

}
else{
    console.log('voce nao passou no processo')
}
if(personone.age>= 18 && personfive.nationality=== 'brasileira'){
    console.log('voce passou no processo')

}
else{
    console.log('voce nao passou no processo')
}