function verifierReponses() {
    // Sélectionne tous les checkbox cochés
    const reponsesCochees = document.querySelectorAll('.answers input[type="checkbox"]:checked');
    
    // Récupère les valeurs des réponses cochées
    const valeursCochees = Array.from(reponsesCochees).map(input => input.value);
    
    // Réponses correctes
    const bonnesReponses = ["1", "2"];
    
    // Vérifie si les réponses sélectionnées sont exactement les bonnes réponses
    const estCorrect = valeursCochees.length === bonnesReponses.length &&
                       valeursCochees.every(val => bonnesReponses.includes(val));

    const resultat = document.getElementById("resultat");
    
    if (estCorrect) {
        resultat.textContent = "Bonne réponse !";
        resultat.style.color = "green";
    } else {
        resultat.textContent = "Mauvaise réponse. Réessayez.";
        resultat.style.color = "red";
    }
}
