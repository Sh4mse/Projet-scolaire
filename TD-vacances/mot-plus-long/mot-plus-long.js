"use strict";

const citation = document.getElementById("citation");
const motPlusLong = document.getElementById("motPlusLong");

citation.addEventListener("input", () => {
    let citationText = citation.value;

    // Utilisation de replace pour remplacer les caractères spéciaux, par exemple enlever la ponctuation
    citationText = citationText.replace(/[.,!?;]/g, ""); // On remplace la ponctuation par une chaîne vide

    // Découper la citation en mots après avoir enlevé la ponctuation
    let lesmots = citationText.split(" ");
    console.log(citationText);
    
    let motlepluslong = "";
    
    for (const mot of lesmots) { 
        console.log(mot);
        if (mot.length > motlepluslong.length) {
            motlepluslong = mot; // On assigne directement le mot
        }
    }

    motPlusLong.textContent = motlepluslong; // Afficher le mot le plus long
    console.log(motlepluslong);
});
