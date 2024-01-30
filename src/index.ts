let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];

let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array

let employee: [number, string][];
employee = [
  [1, "Brad"], // prva vrijednost je ocekivan number a druga string
  [1, "John"],
  [3, "Jill"],
];

// Union

let pid: string | number; // neka pid bude ili string ili number
pid = "22";

// Enum
enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction1.Up);

// Objects
type User = {
  // ocekivani datatype vrijednosti u objektu
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid; // kad nam je varijabla koju prosljedjujemo type any a mi zelimo da je number onda pisemo <number> kad je proslijedimo

let customerId = cid as number; // isti rezultat drugaciji nacin

// Functions

function addNum(x: number, y: number): number {
  // ():number znaci da ocekujemo da return bude number
  return x + y;
}

console.log(addNum(1, 2));

// Void
function log(message: string | number): void {
  // ocekivano da nema returna to jest void
  console.log(message);
}

// Interfaces

interface UserInterface {
  // kod interface namamo =
  readonly id: number; // nece se petljati u output
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number; // nece se petljati u output
  name: string;
  register(): string;
}

// Classes

class Person implements PersonInterface {
  // imprelemtiranje ocekivanih datatypova iz PersonInterface = implements
  // private id: number; // private znaci da ces moci koristiti samo unutar klase
  // protected id: number; // protected znaci isto kao i private samo sto jos mozemo koristiti u extended klasama
  id: number;
  name: string;
  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); // isto kao this.id i this.name
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]); // <T> je kao placeholder umjesto kojeg mozemo da umjesto T stavljamo datatypes
let strArray = getArray<string>(["Brad", "John", "Jill"]);
