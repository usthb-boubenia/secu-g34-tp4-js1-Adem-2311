"use strict";

// Ici on declare la fonction f1(), comme on a vu en cour slide 45
function f1() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log("Etudiant1");
    console.log("Etudiant2");
    console.log("Etudiant3");
}

// Ici on declare la fonction f2(), comme on a vu en cour slide 45
function f2() {
    // Ici on declare une objet, comme on a vu en cour slide 39
    const obj = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log(obj);
}

// Ici on declare la fonction f3(), comme on a vu en cour slide 45
function f3() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log("nom1-prenom1-21");
    console.log("nom2-prenom2-22");
    console.log("nom3-prenom3-23");
}

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn1 = document.getElementById("btn-1");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn1.addEventListener("click", f1);

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn2 = document.getElementById("btn-2");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn2.addEventListener("click", f2);

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn3 = document.getElementById("btn-3");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn3.addEventListener("click", f3);