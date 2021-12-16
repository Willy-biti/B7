let pessoa = {
    nome: 'Willy', 
    idade: 24,
    caracteristica: ['Bonito', 'inteligente', 'integro']
};

console.log(pessoa.caracteristica)

let pessoa = JSON.parse('{"nome": "willy", "idade": "24"}'); //JSON .PARSET transforme STRING em OBJETO

console.log(pessoa.idade)