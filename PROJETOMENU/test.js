function menuToggle() {
    let testando = document.querySelector('#menu-area');

    if( testando.style.width == '200px' ) {
        testando.style.width = '0px'
    } else {
        testando.style.width = '200px'
    }
}