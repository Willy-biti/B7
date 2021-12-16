//Selecionar peloa "CLASSE"
document.getElementsByClassName('lista')[0].innerHTML ='item alterado' 

//Selecionar pela Tag
document.getElementsByTagName('input')

//Que seleciona tudo 
document.querySelector('')


function verde(){
    //Classlist serve para classisficar as class para vc alaterar
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}

function vermelho(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho')
}

function azul(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelhol');
    document.querySelector('#exemplo').classList.add('azul')
}

function trocar(){
    //Contains server pra averificar se tem algum item
    if(document.querySelector('button').classList.contains('verde')){
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('azul');
    } else {
        document.querySelector('button').classList.remove('azul');
        document.querySelector('button').classList.add('verde');
    }
}