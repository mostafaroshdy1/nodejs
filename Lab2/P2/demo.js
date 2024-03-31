///server ==> http
// const http = require("http");
// http.createServer((req, res)=>{}).listen(7010)

//1-Event ===> events ==> class ==> instance ==> new event()
// const EventEmitter = require("events");

// var e1 = new EventEmitter();

// e1.on('ABC',()=>{console.log("Event ABC Fired!!")})
// e1.on('XYZ',()=>{console.log("Event XYZ Fired!!")})
// e1.emit('ABC');
// e1.emit('ABC');
// e1.emit('ABC');
// e1.emit('ABC');
// e1.emit('ABC');

// e1.once('QWE',()=>{console.log("Event QWE Fired!!")})
// e1.emit("QWE");
// e1.emit("QWE");
// e1.emit("QWE");

// class MyEvent extends EventEmitter{
//     hamada(){}
// }

// let e1 = new MyEvent();
// e1.on("vvv",()=>{console.log("Event VVV Fired!!")})
// e1.emit('vvv');
// e1.hamada();


// const myMod = require('./Modules/myModule');
// console.log("Server", myMod);//{x, y}
// // console.log(myMod.x); //10
// // console.log(myMod.y); //20

// myMod.AddItem("Labtob", 25000);
// myMod.AddItem("Watch", 3000);
// myMod.AddItem("Headphone", 2000);

// console.log(myMod.GetSum());//return

// const myMod1 = require('./Modules/myModule');

// myMod1.AddItem("Labtob", 25000);
// myMod1.AddItem("Watch", 3000);
// myMod1.AddItem("Headphone", 2000);

// console.log(myMod1.GetSum());//return


const myMod = require('./Modules/myModule');//{}
// console.log(myMod);
let MyOrders = myMod.Orders; /// MyOrders = class{}

let o1 = new MyOrders();
o1.AddItem("Labtob", 25000);
o1.AddItem("Watch", 3000);
o1.AddItem("Headphone", 2000);
console.log(o1.GetSum());//return

let o2 = new MyOrders();
o2.AddItem("Labtob", 25000);
o2.AddItem("Watch", 3000);
o2.AddItem("Headphone", 2000);
console.log(o2.GetSum());//return





