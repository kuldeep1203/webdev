// var generateName =require("sillyname");//using cjs -common js 
//we can do this using ecma script module that is ejs

// import generateName from "sillyname";

// var sillyName=generateName();

// console.log(`My name is ${sillyName}`);

import superheroes from "superheroes";

const name = superheroes.random();

console.log(`My name is ${name}`);