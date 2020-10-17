function Animal(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;

  Animal.prototype.speak = function () {
    console.log('Guau!');
  };
}

function Perro(name, age, color) {
  Animal.call(this, name, age, color);

  Perro.prototype.speak = function () {
    Animal.prototype.speak.call();
    console.log('Perrito salsichero');
  };

  Perro.prototype.moveTail = function () {
    console.log('tail moving');
  };

  Perro.prototype.saltar = function () {
    console.log('saltando');
  };
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Animal;

// class Animal {
//   constructor(name, age, color) {
//     this.name = name;
//     this.age = age;
//     this.color = color;
//   }

//   speak() {
//     console.log('guau');
//   }
// }

// class Perro extends Animal {
//   constructor(name, age, color, voz) {
//     super(name, age, color);
//     this.voz = voz;
//   }

//   speak() {
//     super.speak();
//     console.log('Because i am a dog');
//   }

//   saltar() {
//     console.log('saltando');
//   }
// }

const perro = new Perro('Boby', 8, 'Marron', 'Ronca');

console.log(perro);
perro.speak();
perro.saltar();
