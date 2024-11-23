
//Exercice 1 : Création basique d'une Promise
//Créez une fonction `delayedMessage` qui retourne une Promise qui se résout après 2 secondes avec le message "Bonjour!".
function delayedMessage() {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve("Bonjour!");
         }, 2000); 
     });
 }
 delayedMessage().then((message) => {
     console.log(message); 
 });
 