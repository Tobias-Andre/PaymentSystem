const shipId = document.getElementById("shipId");

const fuel = Math.floor((Math.random() * 999999) + 100);
const cargo = Math.floor((Math.random() * 99999999) + 10000);

let fuelStr = fuel.toString().padStart(6, '0');
let cargoStr = cargo.toString().padStart(8, '0');

shipId.innerText = `XX ${fuelStr} ${cargoStr}`;