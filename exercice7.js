// Fonction pour réessayer une opération en cas d'echec
function retryOperation(operation, retries, delay) {
     return new Promise((resolve, reject) => {
         const attempt = (remainingRetries) => {
             operation()
                 .then(resolve) 
                 .catch((error) => {
                     if (remainingRetries > 0) {
                         console.log(`Échec. Réessai dans ${delay} ms... Tentatives restantes : ${remainingRetries}`);
                         setTimeout(() => attempt(remainingRetries - 1), delay); 
                     } else {
                         reject(`Opération échouée après ${retries} tentatives : ${error}`); 
                     }
                 });
         };
         attempt(retries);
     });
 }
 
 // Fonction simulant une opération asynchrone qui échoue aléatoirement
 function unreliableOperation() {
     return new Promise((resolve, reject) => {
         const success = Math.random() > 0.7; 
         setTimeout(() => {
             if (success) {
                 resolve("Succès de l'opération !");
             } else {
                 reject("Erreur aléatoire !");
             }
         }, 500); 
     });
 }
 
 // Utilisation de la fonction avec un maximum de 3 tentatives et un délai de 1 seconde entre chaque
 retryOperation(unreliableOperation, 3, 1000)
     .then((result) => console.log("Résultat :", result))
     .catch((error) => console.error("Erreur finale :", error));
 