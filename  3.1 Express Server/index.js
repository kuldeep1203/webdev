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

var events = require('events')
var util = require('util')

var Person = function(name){
    this.name = name;

};
util.inherits(Person, events.EventEmitter);//Person will inherit event.Emitter nd anything created using the person
// constructor isgonna be able to have custom evets attached to it 
var luke = new Person('luke')
var  hugho = new Person('hugho')
var laris = new  Person('laris')

var people = [luke,hugho,laris];
people.forEach(function(Person){
    Person.on('speak',(msg)=>{ 
        console.log(Person.name+ ' said: '+msg)

    })
})

luke.emit('speak','nein')




