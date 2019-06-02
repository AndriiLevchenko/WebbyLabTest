//Определяем конструктор животных
function Animal(name){
	this.name=name
}

//Метод, который показывает имя животного. Сохраняем в прототип.
Animal.prototype.getName=function(){
	console.log("Animal's name is  ", this.name);
}


//Определяем животное с именем Bob
var Bob=new Animal('Bob');

Bob.getName();

//Определяем конструктор собак
function Dog(name){
	Animal.apply(this, arguments);
}

//Конструктор собак наследует  методы животного
Dog.prototype=Object.create(Animal.prototype);

//Определяем собаку с именем Aban
var Aban =new Dog('Aban');

Aban.getName();

//Переопределяем метод getName для конструктора собак, добавляем метод bark,
//предварительно сохранив конструктор
Dog.prototype.constructor=Dog;

Dog.prototype.getName=function(){
	console.log("Dog's name is ", this.name);
}
Dog.prototype.bark=function(){
	console.log('Dog ', this.name, ' is barking');
}

Aban.getName();
Aban.bark();
