/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
const sum = []
const result = []
let number_0 = Number (prompt ('Scrivi un numero di 4 cifre'));
console.log(number_0);

    if (number_0 > 0) {
    
        let operation_0 = (number_0 % 10);
        //Ottengo il 1 numero
        sum.push(operation_0)
        console.log(sum);
        }
    let first = (number_0 - sum[0]);
    result.push(first);
    //Ottengo il 1 risultato
    console.log(result);  
    
    if (result[0] > 0) {
        let operation_1 = result[0] / 10
        //Ottengo il 2 risultato
        result.push(operation_1);
        console.log(result);
    }

    if (result[1] > 0) {
        let operation_2 = result[1] % 10
            //Ottengo il 2 numero
            sum.push(operation_2);
            console.log(sum);
        }
        //Ottengo il 3 risultato
        let second = result[1] - sum[1]
        result.push(second);
        console.log(result);
    
    if ( result[2] > 0){

        let operation_3 = result[2] / 10
        //Ottengo il 4 risultato
        result.push(operation_3);
        console.log(result);
    }

    if (result[3] > 0){

        let operation_4 = result[3] % 10
        //Ottengo il 3 numero
        sum.push (operation_4);
        console.log(sum);
    }

    let third = (result[3] - sum[2]);
    result.push(third);
    console.log(result);

    if (result[4] > 0) {

        let operation_5 = result [4] / 10;
        //Ottengo il 4 numero
        sum.push (operation_5)
        console.log(sum);

    }

//Calcolo la somma dei valori dentro l'array sum
let calcolo = 0

     for (let i = 0 ; i < sum.length ; i++ ){

        calcolo += sum[i];

     }
     console.log(calcolo);



    /*if (number_5 > 0){
        let fraction_6 = number_5 / 10;
        result fraction_6
    }

}

}

/*
if (number > 0){
    
    let fraction = number % 10
    sum.push(fraction);
    //let number_2 = number - fraction    
    } 
    console.log(sum);

    let number_2 = number - fraction
    console.log(number_2);
    if (number_2 > 0){
    
        let fraction_2 = number / 10
        sum.push(fraction_2); 
        console.log(sum);  
        }


/*
if (number_2 > 0) {
    
    let fraction = number_2 / 10
    sum.push(sum);
    //let number_3 = number_2 - fraction
    
    } 
if (number_3 > 0) {
    
        let fraction = number % 10
        sum.push(sum);
        //let number = number - fraction
        
} 

if (number > 0) {
    
    let fraction = number % 10
    sum.push(sum);
    //let number = number - fraction
    
} 

    
    
    /*else if (number > 0){
        let fraction = number % 10
        sum.push(fraction);

        } else if (number > 0){
            let fraction = number % 10
            sum.push(fraction);

            } else if (number > 0){

                let fraction = number % 10
                sum.push(fraction);
            }*/
