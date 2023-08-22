//number
let age: number = 40;
console.log(age);

//array
let arr: number[] = [1, 4];
console.log(arr);

//tuple
let tup: [number, string] = [1, 'test'];
console.log(tup);

//enum
enum size {small = 1, medium = 4, large = 6}
console.log(size.medium);

//Functions
function calculateTax(income: number, tax: number = 1.2) {
    console.log(tax);
    if (income < 20000) {
        return income * 1.2;
    }

    return income * 1.3;
}
console.log(calculateTax(10000));

//objects
type Employee = {
    id: number,
    name: string
}
const employee: Employee = {
    id: 2,
    name: 'test'
}
console.log(employee);

//union
function printWeight(weight: number|string): number|string {
    console.log(weight)
    return weight
}
printWeight('10KG');

//intesections
type test1 = {
    id: number
}

type test2 = {
    name: string
}

type test = test1 & test2
let sample: test = {
    id: 4,
    name: 'test'
}
console.log(sample);

//null
function calculateTax2(income: number|null|undefined) {
    return income
}
console.log(calculateTax2(undefined));

//Optional chaining
let hello: any;
console.log(hello?.());
let arr1: string[] = [];
console.log(arr1?.[0]);
let samples = false
type Obj = {
    test: string,
    test1?: string
}
let data: Obj = {
    test: 'hai'
}
if (samples) {
    data.test1 = 'sample';
}
console.log(data?.test1)
