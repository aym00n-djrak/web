import React;

//Comment
console.log("Hello World!");

let person = {
    name: 'Rémy',
    age: 20,
    type: 'human'
};

const circle = {
    radius: 1,
    location: {x:1, y:1},
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

let favoritecolors = ['blue', 'green', 'red'];

favoritecolors[3]= 'Purple';

console.log(favoritecolors);

console.log(favoritecolors.length);

console.log(person.name);

function intro(person)
{
    console.log(person.name+" "+ "son age est : "+person.age+ " il est : "+person.type );
}

intro(person);