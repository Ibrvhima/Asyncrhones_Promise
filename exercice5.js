// ## Exercice 5 : Promise.all
// Créez une fonction qui récupère en parallèle les informations d'une ville :



// Fonction simulant une API pour obtenir la météo d'une ville
function fetchWeather(city) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve(`Météo pour ${city}: Ensoleillé, 25°C`);
         }, 1000); 
     });
 }
 
 // Fonction simulant une API pour obtenir les restaurants populaires d'une ville
 function fetchRestaurants(city) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve([`Restaurant 1 de ${city}`, `Restaurant 2 de ${city}`]);
         }, 1500); 
     });
 }
 
 // Fonction simulant une API pour obtenir les lieux touristiques d'une ville
 function fetchTouristSpots(city) {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve([`Lieu touristique 1 de ${city}`, `Lieu touristique 2 de ${city}`]);
         }, 1200); 
     });
 }
 
 // Fonction pour récupérer toutes les informations d'une ville en parallèle
 function fetchCityInfo(city) {
     return Promise.all([
         fetchWeather(city),
         fetchRestaurants(city),
         fetchTouristSpots(city),
     ])
     .then(([weather, restaurants, touristSpots]) => {
         return {
             city,
             weather,
             restaurants,
             touristSpots,
         };
     })
     .catch((error) => {
         console.error(`Erreur lors de la récupération des informations pour ${city}:`, error);
     });
 }
 
 // Utilisation de la fonction
 fetchCityInfo("Conakry").then((cityInfo) => {
     console.log("Informations sur la ville :", cityInfo);
 });
 