"use strict";
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"], // prva vrijednost je ocekivan number a druga string
    [1, "John"],
    [3, "Jill"],
];
// Union
let pid; // neka pid bude ili string ili number
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid; // kad nam je varijabla koju prosljedjujemo type any a mi zelimo da je number onda pisemo <number> kad je proslijedimo
let customerId = cid; // isti rezultat drugaciji nacin
// Functions
function addNum(x, y) {
    // ():number znaci da ocekujemo da return bude number
    return x + y;
}
console.log(addNum(1, 2));
// Void
function log(message) {
    // ocekivano da nema returna to jest void
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // isto kao this.id i this.name
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]); // <T> je kao placeholder umjesto kojeg mozemo da umjesto T stavljamo datatypes
let strArray = getArray(["Brad", "John", "Jill"]);
