const fs =require("fs");//fs-file system

fs.writeFile("message.txt","Hello from Nodejs",(err) =>{// callback err
    if(err) throw err;
    console.log("the file has been saved!")
} );

fs.readFile("message.txt","utf8",function(err,data){// file name , encoding,call back 
    if(err) throw err;
    console.log(data);
});
// fs.readFile("tessage.txt","utf8",function(err,data){// file name , encoding,call back 
//     if(err) throw err;
//     console.log(data);
// });