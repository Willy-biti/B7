/*
//let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

//let liesta2 = ['willy', 'biti',]
//let res = lista.toString(); //toString faz listagem
//let res = lista.join(' '); //ele separa por o item que coloca entre ()
//let res = lista.indexOf('Corante') //retorna a posição do item

//lista.shift(); // ele remove o ultimo item e o SHIF remove o primeiro
//lista.push('Willy'); //Push ele adiciona ITEM
//lista[0] = 'Ovos' // para alterar o item
//lista.splice(1, 1); //para REMOVER um ITEM no array (a melhor maneira)
//let res = lista.concat(liesta2);  //para Concatenar dois array
//lista.sort(); //Ordenar na ordem ALFABETICA
//lista.reverse();  // para inverter */

// let lista = [45, 4, 9, 16, 25];
// let lista2 = [];

/*lista2 = lista.map(function(item) {
    return item * 2;
}) ; */ //MAP ele serve para dobrar os item

for (let i in lista) {
    lista2.push(lista[i] * 2)
}


lista2 = lista.filter(function(item) {
    if(item > 20) {
        return true;
    } else {
        return false;
    }
});  // FILTER sert a filtrer 

lista2 = lista.every(function(item){
    if(item > 20) {
        return true;
    } else;
});  //Every retorna se todos os item são mairo ou menor


lista2 = lista.some(function(item){
    if(item > 50) {
        return true;
    } else; 
    //ou
    return (item > 20)? true : false // Ça c'est autre maniere de appliquer IF
});  //Contrario de Every, ele retorna ALGUNS

let res = lista2;  
console.log(res);


let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.find(function(item) {
    return (item == 16)? true : false 
}); //Acha o primeiro item que satisfaz o que vc procura

let res = lista2;
console.log(res); 

let lista = [
    {id:1, nome: 'Willy', sobrnome: 'Biti' },
    {id:2, nome: 'Emilie', sobrnome: 'Kongo'},
    {id:3, nome: 'Roger', sobrnome: 'Hunda'}
];

let pessoa = lista.find(function(item){
    return (item.id ==2) ? true : false;
})

//let res = pessoa;
console.log(pessoa);
