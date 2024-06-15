let name1 = {
    firstname : "Akshay",
    lastname : "live",
    printFullName : function(){
        console.log(this.firstname+" "+this.lastname);
    }
}

name1.printFullName();

let printAddress = (hometown,state)=>{
    console.log(hometown+","+state);
}

let name2 = {
    firstname : "Kuldeep",
    lastname : "live",

}
//call method  - known as function borrowing from an object/global to other objects
//first argument is reference what this points to 
name1.printFullName.call(name2); // if the func had more arguments to be passed we can just add it as such 
printAddress.call(name1,'Abudhabi','Uae');
printAddress.apply(name2,['Abudhabi','Uae']);

bind

let printFullName2 = name1.printFullName.bind(name2);//this returns a method bound to printFullName
console.log(printFullName2); //we can call this method for our object name2
name2.printFullName2()



//bind...
// Function.prototype so that it can be used by any function. 
Function.prototype.mybind = function(...args) {
    let obj = this;
    let context = args[0];
    console.log(args)
    let bindArgs = args.slice(1);

    console.log(bindArgs)
    return function(...callArgs) {
        console.log(bindArgs)//bindargs are argument passed during binding and callargs during the call of the function
        return obj.apply(context, [...bindArgs, ...callArgs]);
        //obj.call(context, ...bindArgs, ...callArgs) expands to obj.call(context, 'Abudhabi', 'Uae') 
        //if no additional arguments are passed when printAddress2 is called.
    }
}
let printAdress2= printAddress.mybind(name2,'Abudhabi');
printAdress2('Uae');