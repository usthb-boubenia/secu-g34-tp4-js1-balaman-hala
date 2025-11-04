"use strict";
//declaration du tableau d'objet students
const Students = [
    {
        matricule: 1000,
        nom: "JHON",
        prenom: "DOE",
        note1: 14,
        note2: 5
    },
    {
        matricule: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        note1: 7,
        note2: 1
    },
    {
        matricule: 3000,
        nom: "RAYANE",
        prenom: "SMITH",
        note1: 13,
        note2: 3
    }
];

// declaration de la fonction B avec un seul paramètre avec un retour boolean (vu dans le slide 45)
function B(note_finale) {
    //on utilise une condition pour vérifier si la note finale est supérieure ou égale à 10 (vu dans le slide 42)
    if (note_finale >= 10)
        return true;
    else
        return false;
}
// declaration de la fonction A pour afficher le résultat dans la console
function A() {
    //Boucle for (vu dans le slide 44)
    for (let i = 0; i < Students.length; i++) {
        // l'appel de la fonction B pour verifier 
        if (B(Students[i].note1 + Students[i].note2))
            console.log(Students[i].matricule + ": ADMIS")
        else
            console.log(Students[i].matricule + ": AJOURNÉ")

    }
}