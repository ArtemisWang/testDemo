/*
 * @Author: yating.wang
 * @Date: 2023-02-06 15:02:14
 * @LastEditors: yating.wang
 * @LastEditTime: 2023-02-15 16:01:25
 * @Description:
 */
// console.log('hello ts')
// let age: number = 8;
// let myName: string = 'yt'
// let isLoading: boolean = true
// let a: null = null
// let b: undefined = undefined
// let s: symbol = Symbol()
// age.toFixed()
// console.log(age)
// let numbers: number[] = [1, 2, 3]
// let numbers1: Array<number> = [1, 3, 5]
// let c: boolean[] = [true, false]

// // 联合类型，一定要有括号，不然就不是联合类型，而是一种类型或另一种类型只能选其一
// let arr: (number | string)[] = [1, 'a', 2, 'b']

// let arr1: number | string[] = ['a', 'b']
// let arr2: number | string[] = 123

// // 类型别名
// let arr3: (number | string)[] = [1, 'a', 2, 'b']
// let arr4: (number | string)[] = [1, 'a', 2, 'b']
// // 声明类型别名
// type CustomArray = (number | string)[]
// // 使用类型别名
// let arr5: CustomArray = [1, 'a', 2, 'b']
// let arr6: CustomArray = [1, 'a', 2, 'b', '3', 4, 5]


// function add(num1: number, num2: number): number {
//   return num1 + num2
// }
// console.log(add(1, 2))

// const add1 = (num1: number, num2: number): number => { return num1 + num2 }

// const add2: (num1: number, num2: number) => number = (num1, num2) => { return num1 + num2 }

// function greet(name: string): void {
//   console.log('hello', name)
// }

// function mySlice(start?: number, end?: number): void {
//   console.log('起始索引：', start, '结束索引：', end)
// }

// mySlice(0, 2)

// let person: { name: string, age: number, sayHi(): void, greet(name: string): void } = {
//   name: 'yt',
//   age: 10,
//   sayHi() { },
//   greet(name) { }
// }
// let person1: {
//   name: string
//   age: number
//   sayHi(): void
//   greet: (name: string) => void
// } = {
//   name: 'yt',
//   age: 10,
//   sayHi() { },
//   greet(name) { }
// }

// function myAxios(config: { url: string, method?: string }) {
//   console.log(config)
// }

// interface IPerson {
//   name: string
//   age: number
//   sayHi(): void
// }

// let person2: IPerson = {
//   name: 'jack',
//   age: 10,
//   sayHi() {
//     console.log('greet')
//   },
// }

// type IPerson1 = {
//   name: string
//   age: number
//   sayHi(): void
// }


// interface Point2D { x: number, y: number }
// interface Point3D { x: number, y: number, z: number }

// interface Point2D { x: number, y: number }
// interface Point3D extends Point2D { z: number }

// let position: number[] = [39.5427, 116.2317]

// let position: [number, number] = [39.5427, 116.2317]

// let age1 = 18

// function add3(num1: number, num2: number) {
//   return num1 + num2
// }

// add3(1, 3)

// const aLink = document.getElementById('link')

// const aLink = document.getElementById('link') as HTMLAnchorElement
// const aLink1 = <HTMLAnchorElement>document.getElementById('link')

// let str1 = 'Hello TS'
// const str2 = 'Hello TS'

// function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
//   console.log(direction)
// }

// enum Direction { Up, Down, Left, Right }
// function changeDirection1(direction: Direction) {
//   console.log(direction)
// }
// // 访问枚举成员
// changeDirection1(Direction.Up)

// enum Direction { Up = 10, Down, Left, Right = 16 }
// enum Direction { Up = 'Up', Down = 'Down', Left = 'Left', Right = 'Right' }

// let obj: any = { x: 0 }
// obj.bar = 100
// obj()
// const n: number = obj

// let arr7: number[] = [1, 2, 3]

// let p = { x: 1, y: 2 }
// function formatPoint(point: { x: number, y: number }) { }
// formatPoint(p)
// function formatPoint1(point: typeof p) { }
// formatPoint1(p)
// let num: typeof p.x

// class Person { }
// const p = new Person()

// class Person {
//   age: number = 0
//   gender = '男'
// }
// const p = new Person()
// p.age = 18
// p.gender = '1'

// class Person {
//   age!: number // "!"代表【非空断言运算符】，含义就是断言这里一定有值
//   gender!: string
//   constructor(age: number, gender: string) {
//     this.age = age
//     this.gender = gender
//   }
// }

// class Point {
//   x = 10
//   y = 10
//   scale(n: number): void {
//     this.x *= n
//     this.y *= n
//   }
// }

// class Animal {
//   move() { console.log('Moving alone!') }
// }
// class Dog extends Animal {
//   name = '二哈'
//   bark() {
//     console.log('汪！')
//   }
// }
// const d = new Dog()
// d.move()
// d.bark()
// console.log(d.name)

// interface Singable {
//   sing(): void
// }
// class Person implements Singable {
//   sing() {
//     console.log('啦啦啦~')
//   }
// }

// class Animal {
//   public move() {
//     console.log('Moving away!')
//   }
// }

// const a = new Animal()
// a.move()

// class Animal {
//   protected move() {
//     console.log('Moving away!')
//   }
//   run() {
//     console.log('run~')
//     this.move()
//   }
// }

// const a = new Animal()
// a.move() // 这里会报错

// class Dog extends Animal {
//   bark() {
//     console.log('汪！')
//     this.move() // 这里可以调用
//   }
// }

// const b = new Dog()
// b.bark()

// class Animal {
//   private move() {
//     console.log('Moving away!')
//   }
//   run() {
//     console.log('run~')
//     this.move()
//   }
// }

// const a = new Animal()
// a.move()


// class Person {
//   readonly age: number = 18
//   constructor(age: number) {
//     this.age = age
//   }
//   setAge() {
//     this.age = 18
//   }
// }

// interface Iperson {
//   readonly name: string
// }

// let obj: Iperson = {
//   name: 'jack'
// }

// obj.name = 'rose'

// let obj: { readonly name: string } = {
//   name: 'jack'
// }

// obj.name = 'rose'

// const r = { a: 1, b: 2 }
// Object.defineProperty(r, 'a', { writable: false })
// r.a = 3
// console.log(r)

// class Point {
//   x!: number
//   y!: number
// }
// class Point2D {
//   x!: number
//   y!: number
// }

// let a: Point = new Point2D()
// console.log(a)

// class Point { a!: number; b!: number }
// class Point3D { a: number = 1; b: number = 2; c: number = 3 }
// const p1: Point = new Point3D()
// const p2: Point3D = new Point()

// interface Point { a: number; b: number }
// interface Point3D { a: number; b: number; c: number }
// let p1: Point = { a: 4, b: 5 }
// let p2: Point3D = { a: 1, b: 2, c: 3 }
// p1 = p2
// class Point4D {
//   a!: number
//   b!: number
//   c!: number
//   d!: number
// }
// p2 = new Point4D()

// type F1 = (a: number) => void
// type F2 = (a: number, b: number) => void
// let f1: F1 = (a) => { }
// let f2: F2 = (a, b) => { }
// f2 = f1
// f1 = f2

// type F1 = (a: number) => void
// type F2 = (a: string) => void
// let f1!: F1
// let f2!: F2
// f1 = f2

// interface Point2D { x: number; y: number }
// interface Point3D { x: number; y: number; z: number }
// type F2 = (p: Point2D) => void
// type F3 = (p: Point3D) => void
// let f2!: F2
// let f3: F3 = f2
// f2 = f3

// type F5 = () => string
// type F6 = () => string
// let f5!: F5
// let f6: F6 = f5

// type F7 = () => { name: string }
// type F8 = () => { name: string, age: number }
// let f7!: F7
// let f8!: F8
// f7 = f8

// interface Person { name: string }
// interface Contact { phone: string }
// type PersonDetail = Person & Contact
// let obj: PersonDetail = {
//   name: 'jack',
//   phone: '133..'
// }


// interface A {
//   fn: (value: number) => string
// }
// interface B {
//   fn: (value: string) => string
// }
// type C = A & B

// function id(value: number): number {
//   return value
// }
// function id(value: any): any {
//   return value
// }

// function id<Type>(value: Type): Type { return value }

// const num = id<number>(10)
// const str = id<string>('10')

// function id<Type>(value: Type): Type { return value }
// let num = id(10)
// let id2 = id('abc')

// function id<Type>(value: Type[]): Type[] {
//   console.log(value.length)
//   return value
// }

// interface ILength { length: number }
// function id<Type extends ILength>(value: Type): Type {
//   console.log(value.length)
//   return value
// }

// function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key]
// }

// let person = { name: 'jack', age: 18 }
// getProp(person, 'name')
// getProp(19, 'toFixed')
// getProp('abc', 'split')
// getProp('abc', 0) // 字符串可以通过索引访问字符

// interface IdFunc<Type> {
//   id: (value: Type) => Type
//   ids: () => Type[]
// }

// let obj: IdFunc<number> = {
//   id(value) {
//     return value
//   },
//   ids() {
//     return [1, 3, 5]
//   }
// }

// const strs = ['a', 'b', 'c']
// strs.forEach

// const nums = [1, 2, 3]
// nums.forEach

// interface IState { count: number }
// interface IProps { maxLength: number }
// class InputCount extends React.Component<IProps, IState>{
//   state: IState = { count: 0 }
//   render() {
//     return <div>{ this.props.maxLength } < /div>
//   }
// }

// class GenericNumber<NumType>{
//   defaultValue: NumType
//   add!: (x: NumType, y: NumType) => NumType
//   constructor(value: NumType) {
//     this.defaultValue = value
//   }
// }
// const myNum = new GenericNumber(2)
// myNum.defaultValue = 10

// interface Props {
//   id: string
//   children: number[]
// }
// type PartialProps = Partial<Props>
// let p1: PartialProps = {
//   id: ''
// }
// let p2: Props = {
//   id: '',
//   children: [1]
// }

// interface Props {
//   id: string
//   children: number[]
// }
// type ReadonlyProps = Readonly<Props>

// let props: ReadonlyProps = { id: '1', children: [] }
// props.id = '2'

// interface Props {
//   id: string
//   title: string
//   children: number[]
// }
// type pickProps = Pick<Props, 'id' | 'title'>

// type RecordObj = Record<'a' | 'b' | 'c', string[]>
// let obj: RecordObj = {
//   a: ['1'],
//   b: ['2'],
//   c: ['3']
// }

// interface AnyObject {
//   [key: string]: number
// }
// let obj: AnyObject = {
//   a: 1,
//   b: 2
// }

// interface MyArray<T> {
//   [n: number]: T
// }
// let arr: MyArray<number> = [1, 3, 5]


// type PropKeys = 'x' | 'y' | 'z'
// type Type1 = { [Key in PropKeys]: number }

// // 错误演示
// // interface Type2 {
// //   [Key in PropKeys]: number
// // }

// type Props = { a: number, b: string, c: boolean }
// type Type3 = { [key in keyof Props]: number }

// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }
// type Props = { a: number; b: string; c: boolean }
// type PartialProps = Partial<Props>

// type Props = { a: number; b: string; c: boolean }
// type typeA = Props['a']

// type Props = { a: number; b: string; c: boolean }
// type TypeA = Props['a' | 'b'] // string | number
// type typeB = Props[keyof Props] // string | number | boolean