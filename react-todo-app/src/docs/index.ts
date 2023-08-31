
let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let phoneNumber: string | number;

type Person = {
    name: string;
    age: number;
    email?: string;
};

let person1: Person = {
    age: 22,
    name: "Nayan",
};

let lotsOfPeople: Person[];

let printNameWithType: (name: string) => void; //void returns undefined
let printNameWithType1: (name: string) => never; //never returns anything

function printName(name: string) {
    console.log(name);
}

printName('NAYAN WADEKAR');

interface PersonInterface {
    name: string;
    age?: number;
}

type X = {
    a: string;
    b: number
}

type Y = X & {
    c: string;
    d: boolean; 
}

let demoY : Y = {
    a : 'A STRING',
    b : 110101,
    c : 'C STRING',
    d : false
}

interface PersonalInfo {
    name: string;
    email: string;
    age: string;
    mobileNumber: string;
}

interface ProfessionalDetails extends PersonalInfo {
    professionType: string;
    salary: number | string;
    experience: number;
    currentCompany: null | string
}

// const People1: ProfessionalDetails = {}