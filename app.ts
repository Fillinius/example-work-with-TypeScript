// number
function sum(a: number, b: number) {
  return a + b
}
let num1: number = 40
let num2: number = 2
// console.log(sum(num1, num2))

// string
let string = 'Hello world'
function transform(str: string): string {
  return str.toUpperCase()
}
// boolean
const transform1 = (str: string, bool: boolean): string => {
  if (bool) {
    return str.toUpperCase()
  } else {
    return str.toLocaleLowerCase()
  }
}
let booleanSt = false
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
}
function fullName(name: string, surName: string): string {
  return name + ' ' + surName
}
function fullAdress(obj: { city: string; street: string }): string {
  return obj.city + ' ' + obj.street
}
// console.log(fullAdress(person.address))

//array
const names: string[] = ['vlad', 'igor', 'elela']
names.push('eva')

for (let name of names) {
  name.toUpperCase()
}
const result = names
  .filter((f) => f !== 'eva')
  .map((m) => m.length)
  .reduce((acc, r) => {
    return (acc += r)
  }, 0)
// console.log(result)

// tuples - кортежи - массив разных данных
const temple: [number, string] = [100, 'JS']
// /*пример в react*/ const [count,setCount]=useState(10)
temple.push('javascript') // разрешает добавление - для искл надо добавить
const temple1: readonly [number, string] = [100, 'JS']
const temple3: [boolean, string, ...number[]] = [true, 'JS', 1, 2, 3, 4]

//enum - перечисление фикс значений
enum Roles {
  admin,
  user,
}
// const person1 = {
//   role: 'admin',
// }
const person1 = {
  role: Roles.admin,
}
const person2 = {
  role: Roles.user,
}
function check(person: { role: Roles }) {
  if (person.role === Roles.admin) {
    console.log('Это админ')
  } else {
    console.log('это пользователь')
  }
}
const temp = {
  role: 'star wars',
}
check(person1)
check(person2)
// check(temp) // по факту это ошибка, поэтому прописывают конструкцию ENUM

//Symbol & bigInt
let a: symbol = Symbol('key')
let b: symbol = Symbol('key')
console.log(a === b)
const big: bigint = 123n
const big1 = BigInt(123)

// union types объединенниу типы
function compute(p1: number | string, p2: number | string) {
  if (typeof p1 === 'number' && typeof p2 === 'number') {
    return p1 + p2
  } else {
    return p1.toString() + ' ' + p2.toString()
  }
}
// console.log(compute(4, 5))
// console.log(compute('hello', 'world'))
function logError(err: string | string[]): string | void {
  if (Array.isArray(err)) {
    return err.reduce((acc, cur) => acc + ' ' + cur, '')
  } else {
    console.log(err)
  }
}

// literal types для однострочного опмсания
type OutType = 'text' | 'json'
function convert(data: object, /*type: 'text' | 'json'*/ type: OutType) {
  if (type === 'text') {
    return JSON.stringify(data)
  } else {
    return { ...data }
  }
}
// console.log(convert({ a: 1 }, 'text'))
// console.log(convert({ b: 1 }, 'json'))
// console.log(convert({c:1},'hello')); // нельзя назначить кроме данных в OutType

//Interface идеально для описания объектов
interface User {
  age: number
  name: string
}
interface Adress {
  city: string
  street: string
}
interface Full extends User, Adress {
  data?: Date
}
const person12: Full = {
  age: 42,
  name: 'vlad',
  city: 'NN',
  street: '',
}
// еще вариант записи
interface UserMap {}
interface UserMap {
  [key: number]: Full
}
interface UserMap1 {
  [id: number]: { age: number; name: string }
}
const userMap = {
  1: person12,
  2: person12,
} as UserMap
userMap[1].data // обращение по ключу

// unknown  разновидность, any но более строгая, требуется проверка
let d: unknown = 10
let f = d === 10 // == === || && ?
if (typeof d === 'number') {
  let j = d + 10
}

// never если ф-я в бесконечном цикле
function thowError(mess: string): never {
  throw new Error(mess)
}
function loop(): never {
  while (true) {}
}
function rec(): never {
  return rec()
} // ф-ия рекурсия, возвр саму себя

// Type guard
// задают проверочную ф-ю
function isBoolean(val: string | boolean): val is boolean {
  return typeof val === 'boolean'
}
function logFlag(flag: boolean | string) {
  // if (flag === true) меняем на
  if (isBoolean(flag)) {
    console.log('hi this is boolean')
  } else if (flag === 'text') {
    console.log('hi this is string')
  }
}
logFlag(true)
logFlag('text')
// Generic
const arrayString: Array<string> = ['a', 'b', 'c']
const arrayDiff: Array<string | number> = ['a', 1]
const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('promise has been resolved')
  })
})
promise.then((value) => value.length)

// Generic function
function double<T>(array: T[]): T[] {
  return array.concat(array)
}
const res1 = double(['a', 'b'])
const res2 = double([1, 2, 3])
function fill<T>(array: any, value: T): T[] {
  return array.fill(value)
}
const res3 = fill(['a', 'b'], 1)
const res4 = fill([1, 2, 3], 'd')
// console.log('res3', res3) //[1,1]
// console.log('res4', res4) //['d','d','d']
// function merge(a:object,b:object):object{
//   return Object.assign({},a,b)
// } возвращ тип как any без доступа к свойствам объекта
function merge<T, R>(a: T, b: R) {
  return Object.assign({}, a, b)
}
const res5 = merge({ a: 1 }, { b: 1, d: { c: 1 } })
res5.d.c.toFixed()

function log<T extends string | number>(data: T) {
  console.log(data)
  return data
}
let res6 = <string>log('i am string')
let res7 = log(42) as number
// чтобы получить значение ключа в объекте
const obj1 = { a: 1, d: 3, c: 's' }
function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}
const res8 = getValue(obj1, 'a')

// работа с классами
class Collection<T extends string | number> {
  constructor(private items: T[]) {}
  add(value: T) {
    this.items.push(value)
  }
  get(): T[] {
    return this.items
  }
}
const col1 = new Collection<number>([1, 2, 3])
col1.add(4)

const fn = <T, R>(data: T, value: R): T => {
  console.log(value)
  return data
}

fn<number, string>(42, 'Max')
