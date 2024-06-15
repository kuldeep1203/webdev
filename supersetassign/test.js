name1 :{
    "name"="kuldeep",
    function printname(){
        console.log(this.name);
    }
}

name2:{
    "name"="ku"
}

name1.printname.call(name2)