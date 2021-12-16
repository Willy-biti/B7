let dia = 6;
let nome ='';

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;

    case 2:
        diaNome = 'Terça-Feira';
        break;
        
    case 3:
        diaNome = 'Quarta-Feira';
        break;  
            
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    
    case 5:
        diaNome = 'Sexta-Feira';
        break;

    case 6:
        diaNome = 'Sábado';
        break;

    case 7:
        diaNome = 'Domingo';
        break;

    case 6 : 
    case 7 :
        diaNome = 'Final de semana';
        break;
    case 7 : 
        diaNome = 'Final de semana';
        break;
    
    default:
            diaNome = 'Dia da semana';
            break
}

document.querySelector('#dia').innerHTML = "Hoje é " + diaNome