import t, {testConst, printString} from './sample-export.js'

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
console.log('enum ' + size.medium);

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

//casting
function returnNumOrStr(item: number | string): number | string {
    return item
}

let result: number = <number>returnNumOrStr('1');
console.log(result)

let x: unknown = 'hello';
console.log((<string>x).length);

//generics
const makeArr = <T>(elem: T): T[] => {
    return [elem]
}

let arr2 = makeArr<number>(2);
let arr3 = makeArr({arrr: 'test'});
console.log(arr2)
console.log(arr3)

const makeArr2 = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`
    }
}

let arr4 = makeArr2({firstName: 'suba', lastName: 'hanu', age: 10});
console.log(arr4)

interface Tab<T> {
    id: number,
    name: string,
    data: T
}
let stringTab: Tab<number> = {
    id: 1,
    name: 'hanu',
    data: 3
}
console.log(stringTab);


//utility types
interface test3 {
    id: number,
    name: string,
    age: number,
    mobile?: number
}

const test4 = (obj1: test3, updateObj: Partial<test3>): test3 => {
    return {...obj1, ...updateObj}
}

const test5 = {
    id: 1,
    name: 'test',
    age: 34
}
const test6: test3 = test4(test5, {age: 12231312312});
console.log(test6)

//import and export
printString();
console.log(testConst);
t();
