import { Tamagotchi } from "./moduler/Tamagotchi.js";

document.querySelector("#submit").addEventListener("click", startGame);

function startGame(e) {
    e.preventDefault();

    let TamagotchiName = document.querySelector("#TamagotchiName").value;
    let TamagotchiTypeName = document.querySelector("#TamagotchiTypeName").value;

    let myTamagotchi = new Tamagotchi(Tamagotchi);

    let TamaName = document.querySelector("#TamaName").value;
    // document.querySelector("#TamagotchiName").innerText = TamagotchiName;
    document.querySelector("#TamagotchiType").innerText = TamagotchiTypeName;

    myTamagotchi.hungerDrain();
    myTamagotchi.happinessDrain();

    document.querySelector("#Eat").addEventListener("click", FeedMyTamagotchi);
    document.querySelector("#Fun").addEventListener("click", HaveFunTamagotchi);
}

function FeedMyTamagotchi(){
    Tamagotchi.eat();
    document.querySelector("#Hunger").innerText = Tamagotchi.getHungerlevel();
}

function HaveFunTamagotchi() {
    Tamagotchi.fun();
    document.querySelector("#Happy").innerText = Tamagotchi.getHappinesslevel();
}

Tamagotchi.rip();
Tamagotchi.restartTheGame();