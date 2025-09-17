//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get this.species {
		return this.species;
	}

	makeSound(){
		return "The" + this.species + "makes a sound";
	}
}

class Dog extends Animal {
	bark(){
		return "woof";
	}
}

class Cat extends Animal {
	purr(){
	return "purr";
	}
}

const myCat = new cat("Siamese");
myCat.makeSound();
myCat.purr();

const myDog = new dog("Golden Retriever");
myDog.makeSound();
myDog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
