console.log("Ciao Linda");

const elementLamp = document.getElementById("lamp");
console.log(elementLamp);

// la lampadina è  spenta, creo una variabile inizialmente falsa

let on = false;

elementLamp.addEventListener("click", function () {
  console.log("clicco su lampadina");
});
