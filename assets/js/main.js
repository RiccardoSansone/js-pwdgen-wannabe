//mostra un prompt per inserire il nome salva il nome su una variabile
const nome = prompt('inserisci il tuo nome');

console.log(nome);

//mostra un prompt per inserire il cognome salva il cognome su una variabile
const surname = prompt('inserisci il tuo cognome');

console.log(surname);

//mostra un prompt per inserire il colore salva il colore su una variabile
const bestColor = prompt('inserisci il tuo colore preferito');

console.log(bestColor);

//mostra un prompt per inserire un numero casuale salva il numero su una variabile
const numero = prompt('inserisci un numero a piacere');

console.log(numero);

//prende l'elemento con id password e stampa i 4 dati 
document.getElementById('password').innerHTML = nome + surname + bestColor + numero;

console.log(nome + surname + bestColor + numero);
