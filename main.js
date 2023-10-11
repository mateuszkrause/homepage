const firstName = "Mateusz";
const age = 31;

console.log('Siema!');
console.log(`Mam na imię ${firstName} i mam ${age} lat.`);

const constant = "const";
let changeable = "let";

console.log(`${constant} to zmienne mające stałe połączenie z jedną wartością.`);
console.log(`${changeable} to zmienne, które mogą mieć zmienioną wartość, na którą wskazują, ale definiowane są tylko raz.`);

const heading = document.querySelector('.page-header__heading--js');
console.log(heading);
console.log(heading.style);
heading.innerHTML = 'Hej!';
heading.style.color = 'red';

const paragraph = document.querySelector('.section__paragraph--js');
paragraph.innerHTML = 'PS. Ten krótki, zielony tekst, to taki mały dodatek z JS do pustego elementu "p" ;)';
paragraph.style.color = 'green';

function calculate(argument) {
  argument = argument * 2;
  console.log(argument);
  return argument;
};

calculate(2);

const result = calculate(8);
console.log(result);

const numberOne = 31;
const numberTwo = 32;

const nameOne = 'Matt';
let nameTwo = 'Bob';

console.log(nameOne)
console.log(nameTwo)

nameTwo = 'Matt';

console.log(nameOne)
console.log(nameTwo)

const humanOne = {
  name: 'Matt',
  age: 31
}
const humanTwo = {
  name: 'Bob',
  age: 32
}

console.log(humanOne)
console.log(humanTwo)

humanTwo.age = 33;

console.log(humanTwo)

humanTwo.age = humanOne.age;

console.log(humanTwo)

humanOne.age = 22;

console.log(humanOne)
console.log(humanTwo)