//Определяем конструктор животных
class Animal{
	constructor(name){
		this.name=name
	}
	getName(){
		console.log(`Animal's name is   ${this.name}`);
	}
}

//Определяем животное с именем Bob
var Bob=new Animal('Bob');

Bob.getName();

//Определяем конструктор собак в наследованием
class Dog extends Animal{
  	getName() {
    	console.log(`Dog's name is   ${this.name}`);
  	} 
  	bark() {
    	console.log(`Dog   ${this.name}  is barking`);
  	} 
}


//Определяем собаку с именем Aban
var Aban =new Dog('Aban');

Aban.getName();
Aban.bark();
