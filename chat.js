function getResponse(input) {
 input = input.toLowerCase();

 if (input.includes("pleure")) {
   return "Votre bébé peut pleurer à cause de coliques, fatigue ou besoin de contact.";
 }

 if (input.includes("dort mal")) {
   return "Le sommeil des nourrissons est irrégulier, c’est normal avant 3 mois.";
 }

 if (input.includes("recrache")) {
   return "Les reflux sont fréquents chez les bébés, surtout après le repas.";
 }

 return "Essayez de reformuler votre question ou consultez un professionnel de santé.";
}

function handleSearch() {
 const input = document.getElementById("searchInput").value;
 const result = getResponse(input);
 document.getElementById("result").innerText = result;
}
