let age: number;
age = 12;

let userName: string | string[];
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person;
let people: Person[];

person = {
    name: "max",
    age: 32,
};

//Type inference
let course: string | number = 'React - The Complete Course';
course = 1234;
