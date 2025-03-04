console.log("Ciao Linda");

const elementLamp = document.getElementById("lamp");
console.log(elementLamp);

// la lampadina è  spenta, creo una variabile inizialmente falsa
let on = false;

elementLamp.addEventListener("click", function () {
  console.log("Ho cliccato sulla lampadina");

  // cliccando, la lampadina si accende
  if (on) {
    elementLamp.src = "img/white_lamp.png";
  } else {
    elementLamp.src = "img/yellow_lamp.png";
  }
  // con la negazione, alterno lo stato di accensione della lampadina
  on = !on;
});
