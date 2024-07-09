// let name1 ={
//     fname:"kuldeep",
//     printname : function(city){
//         console.log(this.fname+city);
//     }
// }

// let name2={
//     fname:"ku"
// }

// name1.printname.call(name2,"mumbai")
// // let printname2 = name1.printname.bind(name2)

// // printname2()

// import { EventEmitter } from 'events'; //es script 
// import {util} from 'util';


// var myEmitter = new EventEmitter();


// myEmitter.on('click',function(a,b){
//     console.log('clicked',a+b)
// })

// myEmitter.emit('click',2,4)


const _ = require('lodash');
console.log("hi")

const numbers = [ 1,2,3,4]
const doubled = _.map(numbers,(num)=>num*2);

//chunks

const  chunks = _.chunk(numbers,2);
console.log(chunks)

//compact- removes falsy values

const compact = _.compact([0,1,2,3,4,5,6,7,8,9])
console.log(compact)

//flatten - flattens the array
const flatten = _.flatten([1,[2,[3,[4]]]])
console.log(flatten)

//uniq - removes duplicates
const array = [1, 2, 1, 4, 1, 3];
const unique = _.uniq(array);
console.log(unique); // [1, 2, 4, 3]

//get - gets the value of the property

const object = { 'a': [{ 'b': { 'c': 3 } }] };
const value = _.get(object, 'a[0].b.c');
console.log(value); // => 3

//set - sets the value of the property

_.set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // 4
