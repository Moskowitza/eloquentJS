// declare rabbit as an empty object usin {}
let rabbit={};
//make a method for rabbit
// rabbit.speak=function(line){
//     console.log(`the rabbit says ${line}`)
// };
// rabbit.speak("I'm a rabbit")


//make a function
function speak(line){
    console.log(`The ${this.type} rabbit says, '${line}'`)
};
//make it a property of these rabbit objects
let whiteRabbit={
    type:"white",
    speak
};
let hungryRabbit={
    type:"hungry",
    speak
}
whiteRabbit.speak("oh my ears and whiskers, "+"how late it's getting!")
//there is also the functions call method, we can pass it the object as it's first argument
speak.call(hungryRabbit, "Burp!")

//arrow functoins do not bind there own this, but see this of the scope around them
function normalize(){
    console.log(this.coords.map(n=> n/this.length))
}
//remember, map() applies the same function to each element in an array
// use the call method to pass an object to normalize
normalize.call({coords: [1,2,3,4,5], length:10} )

//prototypes, objects, arrays and functions have prototypes
// let empty ={}
// console.log("console.log(empty.toString)  : ")
// console.log(empty.toString);
// console.log("console.log(empty.toString()) : ")
// console.log(empty.toString());
// console.log("console.log(Object.getPrototypeOf({}) == Object.prototype) : ")
// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log("console.log(Object.getPrototypeOf(Object.prototype)) : ")
// console.log(Object.getPrototypeOf(Object.prototype));

// You can use Object.create to create an object with a specific prototype.
// let protoRabbit ={
//     speak(line){
//         console.log(`The ${this.type} rabbit says '${line}'`)
//     }
// }
// let killerRabbit=Object.create(protoRabbit);
// killerRabbit.type="killer";
// killerRabbit.speak("skreeeeeeee!");

// //CONSTRUCTOR FUNCTION
// function makeRabbit(type){
//     let rabbit=Object.create(protoRabbit);
//     rabbit.type= type;
//     return rabbit;
// }
// function Rabbit(type) {
//     this.type = type;
//   }
// Rabbit.prototype.speak = function(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   };  
// makeRabbit("sleepy");
// let sleepyRabbit=makeRabbit("sleepy");
// sleepyRabbit.speak("yawn")

//CLASS NOTATION
//JavaScript classes are constructor functions with a prototype property.
//You can only add new methods to "classes" so, maybe not ideal way to create objects
class Rabbit{
    constructor(type){
        this.type=type
    }
    speak(line){
        console.log(`The ${this.type} says ${line}`)
    }
}
let killerRabbit= new Rabbit("killer");
let blackRabbit= new Rabbit("black");