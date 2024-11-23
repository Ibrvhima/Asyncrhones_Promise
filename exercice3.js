//## Exercice 3 : Chaînage de Promises
// Créez trois fonctions qui simulent des appels API:

// Fonction pour récupérer un utilisateur
function fetchUser(id) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve({ id: id, name: "User " + id });
         }, 1000); 
     });
 }
 
 // Fonction pour récupérer les posts d'un utilisateur
 function fetchUserPosts(user) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve([
                 { postId: 1, title: "Post 1" },
                 { postId: 2, title: "Post 2" }
             ]); 
         }, 1000); 
     });
 }
 
 // Fonction pour récupérer les commentaires d'un post
 function fetchPostComments(post) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve([
                 { commentId: 101, content: "Commentaire 1" },
                 { commentId: 102, content: "Commentaire 2" }
             ]); 
         }, 1000); 
     });
 }
 
 // Fonction pour récupérer les commentaires du premier post d'un utilisateur
 function getFirstPostComments(userId) {
     return fetchUser(userId) 
         .then((user) => {
             console.log("Utilisateur récupéré :", user);
             return fetchUserPosts(user); 
         })
         .then((posts) => {
             console.log("Posts récupérés :", posts);
             return fetchPostComments(posts[0]); 
         })
         .then((comments) => {
             console.log("Commentaires du premier post :", comments);
             return comments; 
         })
         .catch((error) => {
             console.error("Erreur :", error);
         });
 }
 
 // Utilisation de la fonction
 getFirstPostComments(1);
 
 
 