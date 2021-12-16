let html = '';

let c = 0;

while( c < 10) {
    html += "Numero: " + c + "<br>";
    c++;
}

for (let c = 1; c <= 10; c++) {
    html += "Numero: " + c + "<br>"
}


document.querySelector('.demo').innerHTML = html;