"use strict"; // Active le mode strict pour une meilleure gestion des erreurs

// Récupère l'élément du bouton et des losanges
const button = document.getElementById("button");
const cubes = document.querySelectorAll(".cube-tournant");

// Ajoute un écouteur d'événement au clic sur le bouton
button.addEventListener("click", () => {
    // Récupère la valeur de l'input, en minuscule pour éviter la sensibilité à la casse
    const myInput = document.getElementById("id-mot-saisi").value.toLowerCase().trim();

    // Inverse la chaîne de caractères saisie
    const reversed = myInput.split('').reverse().join('');

    // Vérifie si la chaîne originale est identique à la chaîne inversée (test de palindromie)
    let output, color;
    if (myInput === "") {
        output = "Veuillez entrer un mot.";
        color = "#007BFF"; // Bleu par défaut si aucun mot n'est saisi
    } else if (myInput === reversed) {
        output = "Ce mot est un palindrome.";
        color = "#28a745"; // Vert si c'est un palindrome
    } else {
        output = "Non, ce n'est pas un palindrome.";
        color = "#d9534f"; // Rouge sinon
    }

    // Affiche le résultat dans l'élément avec l'ID "resultat"
    document.getElementById("resultat").textContent = output;

    // Change la couleur des losanges
    cubes.forEach(cube => {
        cube.style.background = color;
    });
});
