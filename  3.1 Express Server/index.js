//when to use eventEmitters
// Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.

// For example, let's say you are creating a ticketing system. The common way to handle things might be like this:

// function addTicket(ticket, callback) {
//     insertTicketIntoDatabase(ticket, function(err) {
//         if (err)
//             return handleError(err);

//         callback();
//     });
// }
// But now, someone has decided that when a ticket is inserted into the database, you should email the user to let them know. That's fine, you can add it to the callback:

// function addTicket(ticket, callback) {
//     insertTicketIntoDatabase(ticket, function(err) {
//         if (err)
//             return handleError(err);

//         emailUser(ticket, callback);
//     });
// }
// But now, someone wants to also notify another system that the ticket has been inserted. Over time, there could be any number of things that should happen when a ticket is inserted. So let's change it around a bit:

// function addTicket(ticket, callback) {
//     insertTicketIntoDatabase(ticket, function(err) {
//         if (err)
//             return handleError(err);

//         TicketEvent.emit('inserted', ticket);
//         callback();
//     });
// }
// We no longer need to wait on all these functions to complete before we notify the user interface. And elsewhere in your code, you can add these functions easily:

// TicketEvent.on('inserted', function(ticket) {
//     emailUser(ticket);
// });

// TicketEvent.on('inserted', function(ticket) {
//     notifySlack(ticket);
// });

// var events = require('events')
// var util = require('util')

// var Person = function(name){
//     this.name = name;

// };
// util.inherits(Person, events.EventEmitter);//Person will inherit event.Emitter nd anything created using the person
// // constructor isgonna be able to have custom evets attached to it 
// var luke = new Person('luke')
// var  hugho = new Person('hugho')
// var laris = new  Person('laris')

// var people = [luke,hugho,laris];
// people.forEach(function(Person){
//     Person.on('speak',(msg)=>{ 
//         console.log(Person.name+ ' said: '+msg)

//     })
// })

// luke.emit('speak','nein')


const fs  = require('fs')
const fs1 = require('fs/promises')

// const testFile = fs.readFileSync(' 3.1 Express Server/test.txt','utf8');
// //sync call
// //blocks the executions untill this is completed

// //async call
// fs.readFile(' 3.1 Express Server/test2.txt','utf8',(err,data)=>{
//     if(data) {
//         console.log(data)
//         // fs.unlinkSync(' 3.1 Express Server/test2.txt') sync call
        
//     }
    
// })
// fs.unlink( ' 3.1 Express Server/test.txt',(err)=>{
//     if(err) throw err;
//     console.log('deleted')
// })
// console.log('test')
// console.log(testFile2)
// console.log(testFile);

// fs.writeFileSync(' 3.1 Express Server/test2.txt',"Fly You Fools")
// //write overwrites already existing text

// fs.appendFileSync(' 3.1 Express Server/test2.txt',"Fly You Fools")

// fs.mkdir('test2.txt')

//fs.rmdir(<name>) you cant remove a directory unless its empty


// //HTTP Module vs. Express: Express is a popular web framework 
// built on top of the HTTP module. While the HTTP module offers 
// a more minimalistic and lower-level approach to server-side 
// development, Express provides a higher-level abstraction with 
// additional features like 
// middleware support, routing, and templating.
const myReadStream =  fs.createReadStream(__dirname+'/readMe.txt','utf8');


// const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
const http = require('http');
http.createServer((req,res)=>{
    // myReadStream.pipe(res);
    // // res.write('hogwarts has called for you')
    // res.end();
    console.log('request was made '+ req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj={
        Name:'ryu',
        job:'ninja',
        age:1000
    }
    res.end(JSON.stringify(myObj));
}).listen(8080)

// const fs = require('fs');

// myReadStream.on('data',(chunk) => {
//     console.log('new chunk received');
//     console.log(chunk);
//     myWriteStream.write(chunk);
//     // Chunks are typically Buffer objects, 
//     // which may need to be converted to strings if the file contains text data
// });

//with pipe u dont have to listen like u do in using listeners pipe do it directly and connect
//the both streams


