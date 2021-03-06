let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = 
` calc(100vw * ${totalSlides}) `;
document.querySelector('.slider--controls').style.height = 
`${document.querySeletor('.slider').clientHeight}px`;

function goProv(){
    currentSlide--;
    if(currentSlide <0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin()
}

function updateMargin(){
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 2000);
// width: calc(100vw * 3) definir a largura das 3 divs slider-item 



//style="width: calc(100% * 6)"