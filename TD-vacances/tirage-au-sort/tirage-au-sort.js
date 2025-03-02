"use strict";

// Déclaration des éléments utilisés
const button = document.getElementById("button");
const imgpirate = document.getElementById("imgpirate");
const nom_pirate = document.getElementById("nom_pirate");
const audiopirate = document.getElementById("audiopirate"); // Ajout de l'élément audio pour la lecture du son

// Liste des résultats possibles (images et sons associés)
const liste_pirate = [
    "Luffy",
    "Zoro",
    "Nami",
    "Sanji",
    "Chopper",
    "Franky",
    "Brook",
    "Crocodile",
    "Teach",
];

// Écouteur d'événement pour le bouton
button.addEventListener("click", () => {
    // Sélection aléatoire d'un pirate
    let nombre_pirate = Math.floor(Math.random() * liste_pirate.length);
    
    // Mise à jour du nom affiché
    nom_pirate.textContent = liste_pirate[nombre_pirate].split("_").join(" ");

    // Mise à jour de l'image
    imgpirate.src = "../img/" + liste_pirate[nombre_pirate] + ".jpg";

    audiopirate.src = "../son/" + liste_pirate[nombre_pirate] + ".mp3";
    audiopirate.play();
});
