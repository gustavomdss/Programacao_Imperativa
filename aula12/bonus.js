// DIGITAL HOUSE()

function digitalHouse(num1, num2){
    for (let soma = 1; soma<=100; soma++ ){
    if ((soma % num1 == 0) && (soma % num2 == 0)) {
        console.log(soma +" - Digital House")
    }
    
        else if ((soma % num1) == 0){
        console.log(soma + "- Digital");
    }
    else if((soma % num2) == 0){
        console.log(soma + " - House");
    }
        
    }
}
digitalHouse(2,9);

//----------------------------------------------------------------------

// SOMA ARRAY()


