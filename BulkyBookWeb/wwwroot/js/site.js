// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const add = (n1 = 1, n2 = 1) => n1 + n2;

console.log(add(5, 5));

var myObject = { id: 1, text: "this is", isComplete: true };

Object.keys(myObject).reduce(function (key, index) {
    myObject[key];
});

console.log(myObject);

const object1 = {
    id: 1,
    text: "this is a text",
    isCompeleted: true,
};

for (const [key, value] of Object.entries(object1)) {

    console.log(`${key}: ${value}`);
}
//constraction

function Car(model, color, create) {
    this.model = model;
    this.color = color;
    this.create = create;
}

const car1 = new Car("Opel", "Red", "12-3-2020");

console.log(car1);