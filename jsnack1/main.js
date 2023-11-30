/*Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/
//Creo una costante con dentro un array di nomi ammessi alla festa
const gatsby = ['Marco' , 'Giada' , 'Federico' , 'Marzia' , 'Luigi' , 'Erika' , 'Dario'];
console.log(gatsby);
// Creo un pormpt che chiede il nome del partecipante che vuole entrare alla festa e lo salvo in una costante
const partecipant = (prompt('Quale è il suo nome?'));
console.log(partecipant);
//Creo un ciclo per far scorrere la lista e verifico con una condizionale se il nome inserito è presente
for ( i = 0 ; i < gatsby.length ; i++){
    const invited = gatsby[i];
    console.log(invited);
    if (partecipant == invited){
        console.log('Lei puo entrare');
    }

}

