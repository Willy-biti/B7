let n = '25.9';

let res = n.toString;  //
let res = 'R$ ' + n.toFixed(2); // toFixed serve para determinar quantas casas decimais devem aparecer 

let res = parseInt(n) + 5; // ParseInt transforme string em Numero
let res = parseFloat(n) + 5; // ParseFloat ele preserva os decimais 

console.log(res)