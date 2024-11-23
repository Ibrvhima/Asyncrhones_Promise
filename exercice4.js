// ## Exercice 4 : Async/Await
// Reprenez l'exercice 3 mais réécrivez la fonction `getFirstPostComments` en utilisant async/await.

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
                 { commentId: 101, content: "Comment 1" },
                 { commentId: 102, content: "Comment 2" }
             ]); 
         }, 1000);
     });
 }
 
 // Réécriture de getFirstPostComments avec async/await
 async function getFirstPostComments(userId) {
     try {
         const user = await fetchUser(userId); 
         console.log("Utilisateur récupéré :", user);
 
         const posts = await fetchUserPosts(user); 
         console.log("Posts récupérés :", posts);
 
         const comments = await fetchPostComments(posts[0]); 
         console.log("Commentaires du premier post :", comments);
 
         return comments; 
     } catch (error) {
         console.error("Erreur :", error); 
     }
 }
 
 // Utilisation de la fonction
 getFirstPostComments(1);

 
