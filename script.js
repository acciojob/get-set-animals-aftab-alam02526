//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get newspecies {
		return this.species;
	}

	makeSound(){
		return "The " + this.species + " makes a sound";
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

const myCat = new Cat("Siamese");
console.log(myCat.makeSound());
console.log(myCat.purr());      

const myDog = new Dog("Golden Retriever");
console.log(myDog.makeSound()); 
console.log(myDog.bark());      
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
