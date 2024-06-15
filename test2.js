let name1 ={
    fname:"kuldeep",
    printname : function(city){
        console.log(this.fname+city);
    }
}

let name2={
    fname:"ku"
}

name1.printname.call(name2,"mumbai")
// let printname2 = name1.printname.bind(name2)

// printname2()