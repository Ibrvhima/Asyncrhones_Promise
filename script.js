
//Exercice 1 : Création basique d'une Promise
//Créez une fonction `delayedMessage` qui retourne une Promise qui se résout après 2 secondes avec le message "Bonjour!".
// function delayedMessage() {
//      return new Promise((resolve) => {
//          setTimeout(() => {
//              resolve("Bonjour!");
//          }, 2000); 
//      });
//  }
//  delayedMessage().then((message) => {
//      console.log(message); 
//  });

//Exercice 2 : Gestion des erreurs avec Promise
// Créez une fonction `divideNumbers(a, b)` qui retourne une Promise qui :
// - Se résout avec le résultat de a/b si b n'est pas 0
// - Se rejette avec un message d'erreur si b est 0

function divideNumbers(a, b) {
     return new Promise((resolve, reject) => {
         if (b !== 0) {
             resolve(a / b); 
         } else {
             reject("Erreur : Division par zéro!"); 
         }
     });
 }
 
 // Utilisation de la fonction
 divideNumbers(10, 2)
     .then((result) => {
         console.log("Résultat :", result); 
     })
     .catch((error) => {
         console.error(error); 
     });
 
 divideNumbers(10, 0)
     .then((result) => {
         console.log("Résultat :", result); 
     })
     .catch((error) => {
         console.error(error); 
     });
 
 