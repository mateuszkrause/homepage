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