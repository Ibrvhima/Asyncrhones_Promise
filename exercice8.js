// Fonction qui exécute une tâche avec un timeout
function executeWithTimeout(task, timeout) {
     // Promise pour gérer le timeout
     const timeoutPromise = new Promise((_, reject) => {
         setTimeout(() => {
             reject(new Error("Opération annulée : délai dépassé"));
         }, timeout);
     });
 
     // Exécuter la tâche en compétition avec le timeout
     return Promise.race([task(), timeoutPromise]);
 }
 
 // Exemple d'une tâche asynchrone qui peut prendre du temps
 function simulateTask() {
     return new Promise((resolve) => {
         const randomTime = Math.random() * 3000; 
         setTimeout(() => {
             resolve(`Tâche terminée en ${randomTime.toFixed(0)} ms`);
         }, randomTime);
     });
 }
 
 // Utilisation de la fonction
 executeWithTimeout(simulateTask, 2000) 
     .then((result) => console.log("Succès :", result))
     .catch((error) => console.error("Erreur :", error.message));
 