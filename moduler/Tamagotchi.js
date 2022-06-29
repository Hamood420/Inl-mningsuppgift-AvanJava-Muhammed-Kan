export class Tamagotchi {
  #Hungerlevel = 5;
  #Happinesslevel = 5;
  #Name;
  #Type;
  
  constructor(Type, Name) {
    this.#Name = Name;
    this.#Type = Type;
  }

  getType(){
    return this.#Type;
  }

  getName(){
    return this.#Name;
  }

  getHappinesslevel() {
    return this.#Happinesslevel;
  }

  getHungerlevel() {
    return this.#Hungerlevel;
  }

  hungerDrain() {
    setInterval(() => {
      if (this.#Hungerlevel < 10) {
        this.#Hungerlevel +=1;
        document.querySelector("Hunger").innerText = this.#Hungerlevel;
      }
      if  (this.#HungerLevel == 10) {
        var Refresh = confirm("Your Tamagotchi was too hungry and died. Try again");
      if (Refresh)
	{
			setTimeout("location.reload(true);",4000);
	}
      }
    }, 4000);
    }

    happinessDrain() {
      setInterval(() => {
        if (this.#Happineslevel > 0) {
          this.#Happinesslevel -= 1;
          document.querySelector("#Happy").innerText = this.#Happinesslevel;
        }
        if (this.#Happinesslevel == 0) {
          var Refresh = confirm("Your Tamagotchi died because of low happiness. Try again");
        if (Refresh)
    {
        setTimeout("location.reload(true);",4000);
    }
        }
      }, 4000);
    }
  
    retartTheGame() {
      if (this.#Happinesslevel == 0 || this.#Hungerlevel == 10) {
        location.reload();
      }
    }
  
    Eat() {
      this.#HungerLevel -= 1;
      console.log(this.feed);
    }
  
    Fun() {
      this.#Happinesslevel += 1;
    }
  
    ripTamagotchi() {
      if (this.#happinessLevel == 0 || this.#hungerLevel == 10) {
        return true;
      } else {
        return false;
      }
    }
}