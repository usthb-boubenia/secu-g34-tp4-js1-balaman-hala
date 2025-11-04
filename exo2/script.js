"use strict";
// creation d'un tableau de chaine de caracteres (vu dans le slide 38)
const Etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
// ici on utilise une boucle pour afficher le tableau Etudiants (vu dans le slide 44)
function F1() {
    // Boucle: for (vu dans le slide 44)
    for (let i = 0; i < Etudiants.length; i++) {
        console.log(Etudiants[i]);
    }
}
// declaration de l'objet etudiant (vu dans le slide 39)
const etudiant = {
    nom: "Jhon",
    prenom: "DOE",
    age: 30
};
// affichage de l'etudiant (vu dans le slide 39)
function F2() {
    console.log(etudiant);
}
// creation d'un tableau d'objets etudiants (vu dans le slide 40)
const etudiants = [
    {
        nom: "nom1",
        prenom: "prenom1",
        age: 21
    },
    {
        nom: "nom2",
        prenom: "prenom2",
        age: 22
    },
    {
        nom: "nom3",
        prenom: "prenom3",
        age: 23
    },
];
//affichage du tableau d'objets etudiants dans la console
function F3() {
    // Boucle: for (vu dans le slide 44)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age)
    }
}

