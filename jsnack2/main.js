/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/
//Creo un array vuoto
let empty = [];
for (i = 0 ; i < 6 ; i++){
    let askMe = Number(prompt ('Inserisci un numero'));
    console.log(askMe);
    if (askMe % 2 == 1){
        empty.push(askMe);
        console.log(empty);
    } else {
        
        console.log(empty);
    }

}