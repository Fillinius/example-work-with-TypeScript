// number
function sum(a, b) {
    return a + b;
}
let num1 = 40;
let num2 = 2;
// console.log(sum(num1, num2))
// string
let string = 'Hello world';
function transform(str) {
    return str.toUpperCase();
}
// boolean
const transform1 = (str, bool) => {
    if (bool) {
        return str.toUpperCase();
    }
    else {
        return str.toLocaleLowerCase();
    }
};
let booleanSt = false;
// console.log(transform1(string, booleanSt))
// object
const person = {
    name: 'Vladimir',
    age: 41,
    surName: 'Revaygin',
    address: {
        city: 'NN',
        street: 'Lenina',
    },
};
function fullName(name, surName) {
    return name + ' ' + surName;
}
function fullAdress(obj) {
    return obj.city + ' ' + obj.street;
}
// console.log(fullAdress(person.address))
//array
const names = ['vlad', 'igor', 'elela'];
names.push('eva');
for (let name of names) {
    name.toUpperCase();
}
const result = names
    .filter((f) => f !== 'eva')
    .map((m) => m.length)
    .reduce((acc, r) => {
    return (acc += r);
}, 0);
// console.log(result)
// tuples - кортежи - массив разных данных
const temple = [100, 'JS'];
// /*пример в react*/ const [count,setCount]=useState(10)
temple.push('javascript'); // разрешает добавление - для искл надо добавить
const temple1 = [100, 'JS'];
const temple3 = [true, 'JS', 1, 2, 3, 4];
//enum - перечисление фикс значений
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["user"] = 1] = "user";
})(Roles || (Roles = {}));
// const person1 = {
//   role: 'admin',
// }
const person1 = {
    role: Roles.admin,
};
const person2 = {
    role: Roles.user,
};
function check(person) {
    if (person.role === Roles.admin) {
        console.log('Это админ');
    }
    else {
        console.log('это пользователь');
    }
}
const temp = {
    role: 'star wars',
};
check(person1);
check(person2);
// check(temp) // по факту это ошибка, поэтому прописывают конструкцию ENUM
//Symbol & bigInt
let a = Symbol('key');
let b = Symbol('key');
console.log(a === b);
const big = 123n;
const big1 = BigInt(123);
// union types объединенниу типы
function compute(p1, p2) {
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        return p1 + p2;
    }
    else {
        return p1.toString() + ' ' + p2.toString();
    }
}
// console.log(compute(4, 5))
// console.log(compute('hello', 'world'))
function logError(err) {
    if (Array.isArray(err)) {
        return err.reduce((acc, cur) => acc + ' ' + cur, '');
    }
    else {
        console.log(err);
    }
}
function convert(data, /*type: 'text' | 'json'*/ type) {
    if (type === 'text') {
        return JSON.stringify(data);
    }
    else {
        return { ...data };
    }
}
const person12 = {
    age: 42,
    name: 'vlad',
    city: 'NN',
    street: '',
};
const userMap = {
    1: person12,
    2: person12,
};
userMap[1].data; // обращение по ключу
// unknown  разновидность, any но более строгая, требуется проверка
let d = 10;
let f = d === 10; // == === || && ?
if (typeof d === 'number') {
    let j = d + 10;
}
// never если ф-я в бесконечном цикле
function thowError(mess) {
    throw new Error(mess);
}
function loop() {
    while (true) { }
}
function rec() {
    return rec();
} // ф-ия рекурсия, возвр саму себя
// Type guard
// задают проверочную ф-ю
function isBoolean(val) {
    return typeof val === 'boolean';
}
function logFlag(flag) {
    // if (flag === true) меняем на
    if (isBoolean(flag)) {
        console.log('hi this is boolean');
    }
    else if (flag === 'text') {
        console.log('hi this is string');
    }
}
logFlag(true);
logFlag('text');
// Generic
const arrayString = ['a', 'b', 'c'];
const arrayDiff = ['a', 1];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise has been resolved');
    });
});
promise.then((value) => value.length);
// Generic function
function double(array) {
    return array.concat(array);
}
const res1 = double(['a', 'b']);
const res2 = double([1, 2, 3]);
function fill(array, value) {
    return array.fill(value);
}
const res3 = fill(['a', 'b'], 1);
const res4 = fill([1, 2, 3], 'd');
// console.log('res3', res3) //[1,1]
// console.log('res4', res4) //['d','d','d']
// function merge(a:object,b:object):object{
//   return Object.assign({},a,b)
// } возвращ тип как any без доступа к свойствам объекта
function merge(a, b) {
    return Object.assign({}, a, b);
}
const res5 = merge({ a: 1 }, { b: 1, d: { c: 1 } });
res5.d.c.toFixed();
function log(data) {
    console.log(data);
    return data;
}
let res6 = log('i am string');
let res7 = log(42);
// чтобы получить значение ключа в объекте
const obj1 = { a: 1, d: 3, c: 's' };
function getValue(obj, key) {
    return obj[key];
}
const res8 = getValue(obj1, 'a');
// работа с классами
class Collection {
    constructor(items) {
        this.items = items;
    }
    add(value) {
        this.items.push(value);
    }
    get() {
        return this.items;
    }
}
const col1 = new Collection([1, 2, 3]);
col1.add(4);
const fn = (data, value) => {
    console.log(value);
    return data;
};
fn(42, 'Max');
