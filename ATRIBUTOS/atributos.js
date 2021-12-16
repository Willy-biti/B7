function trocarImagem(filename) {
    document.querySelector('.imagem').setAttribute('src', 'img/' +filename);
}

function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'img/' +filename);
    document.querySelector('.imgaem').setAttribute('data-animal', animalname);
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert(animal);
}

