function alterar() {
    document.getElementById('titulo').innerHTML = "Trocou o titulo!";
    document.getElementById('campo').value = "trocou o campo";
}

alterar();    // excutar a função

//PARAMETROS

function alterar( titulo ) {
    document.getElementById('titulo').innerHTML = titulo;
    document.getElementById('campo').value = titulo;
}


//RETURN
function somar (x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(15, 15);

console.log(resultado);
