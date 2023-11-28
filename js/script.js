// definisco un'array con la lista delle cose da acquistare
const list = ['Sale', 'Pomodori', 'Cipolle', 'Burro', 'Bagnoschiuma', 'Pasta', 'Olio EVO', 'Patatine', 'Bibite'];

// associo l'elemento HTML con id 'shopping_list' ad una variabile
const shopping_list = document.getElementById('shopping_list');

// dichiaro e inizializzo la variabile contatore del ciclo while
let i = 0;

// tramite un ciclo while stampo la lista in DOM
while (i<list.length){

    // definisco una variabile in cui creo un elemento della lista
    const li = document.createElement('li');
    
    // alla variabile precedentemente creata associo il valore dell'elemento i dell'array
    li.innerText = list[i];

    // aggiungo l'elemento alla lista in HTML tramite la funzione .appendChild
    shopping_list.appendChild(li);

    // incremento della variabile contatore
    i++;
}

// metodo con innerHTML

// while (i<list.length){
//     shopping_list.innerHTML += '<li>${list[i]}</li>';

//     i++;
// }