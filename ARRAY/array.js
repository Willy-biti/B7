let carros = ['Pajero', 'Jeep', 'Ferrari', 'Lamburgini'];

console.log(carros[1]);

let ingredientes = [
    ['uva', 'pera', 'maça'],
    ['willy' , 'biti', 'bangakosa']
]

console.log(ingredientes [0] [2]);

//OBJETOS...............

let carros = ['Pajero', 'Jeep', 'Ferrari', 'Lamburgini'];


let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar:function(){
        console.log('vrum vrum!')
    }
}

console.log(carro.nome);
//ou
console.log(carro['modelo'])

//A diferença entre Array e Objeto é ARRAY [], e OBJETO{}.

let carros = [
    {nome: 'Fiat', modelo: 'palio'},
    {nome: 'ferrari', modelo: 'spider'}
]

console.log(carros[1].modelo);
