// ## Exercice 6 : Promise.race
// Simulez des appels à différents serveurs et retournez la réponse la plus rapide :


// Fonction simulant un appel à un serveur
function fetchFromServer(serverName, responseTime) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(`Réponse de ${serverName} en ${responseTime} ms`);
         }, responseTime);
     });
 }
 
 // Fonction pour retourner la réponse la plus rapide
 function getQuickResponse() {
     const server1 = fetchFromServer("Serveur 1", 1000); 
     const server2 = fetchFromServer("Serveur 2", 800); 
     const server3 = fetchFromServer("Serveur 3", 1200); 
 
     return Promise.race([server1, server2, server3])
         .then((QuickResponse) => {
             console.log("Réponse la plus rapide :", QuickResponse);
             return QuickResponse;
         })
         .catch((error) => {
             console.error("Erreur :", error);
         });
 }
 
 // Utilisation de la fonction
 getQuickResponse();
 