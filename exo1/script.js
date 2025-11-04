"use strict";

// Ici on declare la fonction f1(), comme on a vu en cour slide 45
function f1() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log("John");
}

// Ici on declare la fonction f2(), comme on a vu en cour slide 45
function f2() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log("Doe");
}

// Ici on declare la fonction f3(), comme on a vu en cour slide 45
function f3() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log("John-Doe");
}

// Ici on declare la fonction f4(), comme on a vu en cour slide 45
function f4() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log(30);
}

// Ici on declare la fonction f5(), comme on a vu en cour slide 45
function f5() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log(15);
}

// Ici on declare la fonction f6(), comme on a vu en cour slide 45
function f6() {
    // On affiche dans la console avec console.log(), comme on a vu en cour slide 33
    console.log(3.14);
}

// On acces à l'element par ca identifiant, comme on a vu on cour slide 64
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

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn4 = document.getElementById("btn-4");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn4.addEventListener("click", f4);

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn5 = document.getElementById("btn-5");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn5.addEventListener("click", f5);

// On acces à l'element par ca identifiant, comme on a vu en cour slide 64
const btn6 = document.getElementById("btn-6");
// On attache un evenement (click), qui execute la fonction f1, comme on a vu en cour slide 136
btn6.addEventListener("click", f6);