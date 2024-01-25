// Github: https://github.com/Tobias-Andre

const shipId = document.getElementById("shipId");
const newShip = document.getElementById("newShip");
const calcprice = document.getElementById("calcPrice"); 
const remShip = document.getElementById("remShip");

function firstEmptySpace() {
    for (let i = 0; i < portSpaceEmpty.length; i++) {
        if (portSpaceEmpty[i].state === "empty") {
            portSpaceEmpty[i].state = "occupied";
            let spot = portSpaceEmpty[i].space.padStart(2, "0")
            portSpaceEmpty[i].id = `${spot} ${fuelStr} ${cargoStr}`
            return spot;
        }
    }
}

function addNewShip() {
    let fuelStr = fuel.toString().padStart(6, '0');
    let cargoStr = cargo.toString().padStart(8, '0');
    shipId.innerText = `${firstEmptySpace()} ${fuelStr} ${cargoStr}`;
}

const fuel = Math.floor((Math.random() * 999900) + 100);
const cargo = Math.floor((Math.random() * 99990000) + 10000);

let portSpaceEmpty = [
    {
        space: "1",
        state: "empty",
        id: ""
    },
    {
        space: "2",
        state: "empty",
        id: ""
    },
    {
        space: "3",
        state: "empty",
        id: ""
    },
    {
        space: "4",
        state: "empty",
        id: ""
    },
    {
        space: "5",
        state: "empty",
        id: ""
    },
    {
        space: "6",
        state: "empty",
        id: ""
    },
    {
        space: "7",
        state: "empty",
        id: ""
    },
    {
        space: "8",
        state: "empty",
        id: ""
    },
    {
        space: "9",
        state: "empty",
        id: ""
    },
    {
        space: "10",
        state: "empty",
        id: ""
    }
];