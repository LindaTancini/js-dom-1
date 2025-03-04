console.log("Ciao Linda");

const elementLamp = document.getElementById("lamp");
console.log(elementLamp);

const elementButton = document.getElementById("btn");
console.log(elementButton);

// la lampadina è  spenta, creo una variabile inizialmente falsa
let on = false;

// se metto elementLamp si accende la lampadina se clicco sopra l'img della lampadina
// con elementButton la lampadina si accende se clicco sul bottone
elementButton.addEventListener("click", function () {
  //console.log("Ho cliccato sulla lampadina")
  console.log("Ho cliccato sul bottone");
  // cliccando, la lampadina si accende
  if (on) {
    elementLamp.src = "img/white_lamp.png";
    elementButton.textContent = "Accendi";
  } else {
    elementLamp.src = "img/yellow_lamp.png";
    elementButton.textContent = "Spegni";
  }
  // con la negazione, alterno lo stato di accensione della lampadina
  on = !on;
});
