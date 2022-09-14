    let FizzBuzz = (a,b) => {
        for (i = 0; i<=100; i++){
            if( (i % a == 0) && (i % b == 0) ){
                console.log("FIZZBUZZ")
            }
            else if( i % a == 0){
                console.log("Fizz")
            }
            else if( i % b == 0){
                console.log("Buzz")
            }
            
        }
    }
    FizzBuzz(3,5);

    // BONUS

    let FizzBuzz2 = (a,b,c,d,e) => {
        for (i = 0; i<=100; i++){
            if( (i % a == 0) && (i % b == 0) ){
                console.log(e)
            }
            else if( i % a == 0){
                console.log(c)
            }
            else if( i % b == 0){
                console.log(d)
            }
            
        }
    }
    FizzBuzz2(3,5, "Queijo", "Goiabada", "Romeu&Julieta");

