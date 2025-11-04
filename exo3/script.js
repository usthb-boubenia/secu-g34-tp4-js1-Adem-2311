"use strict";

// Ici on declare un tableau des object, comme on a vu en cour slide 40
const obj = [
    {
        id: 1000,
        nom: "JOHN",
        prenom: "DOE",
        note1: 14,
        note2: 5
    },
    {
        id: 2000,
        nom: "BOB",
        prenom: "CARLTON",
        note1: 7,
        note2: 1
    },
    {
        id: 3000,
        nom: "RAYANE",
        prenom: "SMITH",
        note1: 13,
        note2: 3
    }
];

// Ici on declare la fonction A(), comme on a vu en cour slide 45
function A() {
    // Ici on utilise la boucle forEach, comme on a vu en cour slide 44
    obj.forEach(e => {
        // Ici on utilise la Notation Ternaire, comme on a vu en cour slide 42
        const etat = B((e.note1 + e.note2) / 2) ? "ADMIS" : "AJOURÉ";
        // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
        console.log(`${e.id}: ${etat}`);
    });
}

// Ici on declare la fonction B(), comme on a vu en cour slide 45
function B(moy) {
    // Ici on utilise les Opérateurs Rationnels, comme on a vu en cour slide 41
    return moy > 7.5
}

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn = document.getElementById("btn");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn.addEventListener("click", A);