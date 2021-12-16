//Os dois tipos de For ou Loop
// FOR LOOP
// FOR LOOP ARRAY


// FOR LOOP
let texto = ' ';

for (let i = 0; i < 50; i++) {
    texto = texto + i + '<br>';
}

document.querySelector('.demo').innerHTML = texto; 

// FOR LOOP ARRAY

let carros = ['Ferrari', 'Fusca', 'Palio', 'Carolla', 'gfgh'];

let html = '<ul>';

for(let i in carros) {
    html += '<li>' + carros[i] +'</li>'
}

html +=  '<ul>';

document.querySelector('.demo').innerHTML = html;