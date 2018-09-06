// // declare rabbit as an empty object usin {}
// let rabbit={};
// //make a method for rabbit
// // rabbit.speak=function(line){
// //     console.log(`the rabbit says ${line}`)
// // };
// // rabbit.speak("I'm a rabbit")


// //make a function
// function speak(line){
//     console.log(`The ${this.type} rabbit says, '${line}'`)
// };
// //make it a property of these rabbit objects
// let whiteRabbit={
//     type:"white",
//     speak
// };
// let hungryRabbit={
//     type:"hungry",
//     speak
// }
// whiteRabbit.speak("oh my ears and whiskers, "+"how late it's getting!")
// //there is also the functions call method, we can pass it the object as it's first argument
// speak.call(hungryRabbit, "Burp!")

//arrow functoins do not bind there own this, but see this of the scope around them
// function normalize(){
//     console.log(this.coords.map(n=> n/this.length))
// }
// //remember, map() applies the same function to each element in an array
// // use the call method to pass an object to normalize
// normalize.call({coords: [1,2,3,4,5], length:10} )

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
class Rabbit{
    constructor(type){
        this.type=type
    }
    speak(line){
        console.log(`The ${this.type} says ${line}`)
    }
}
// let killerRabbit= new Rabbit("killer");
let blackRabbit= new Rabbit("black");
// //You can only add new methods to "classes", 
// // maybe not ideal way to create objects
// //but wait!!! you can apply it to the prototype
// Rabbit.prototype.teeth="small"
// console.log(blackRabbit.teeth) /* => small */
// //OVERRIDE
// killerRabbit.teeth="long,sharp, and bloody!"
// //let's pass this into the line attribute
// killerRabbit.speak(killerRabbit.teeth)

// console.log(Array.prototype.toString == Object.prototype.toString);
// // → false
// console.log(Object.prototype.toString.call([1, 2]));

// MAPS
// let ages ={
//     Mick:75,
//     Keith: 200,
//     Ronnie: 70
// };

// let ages= new Map();
// ages.set("Mick",75);
// ages.set("Keith",200);
// ages.set("Ronnie",70);
// console.log(`Mick is ${ages["Mick"]}`)
// console.log("Is Keith's age known?", "Keith" in ages);
// console.log(`Mick is ${ages.get("Mick")}`)
// console.log("Is Keith's age known?", ages.has("Keith"));
// console.log(ages.has(toString));
// console.log(Object.keys("ages"))
// console.log(ages.hasOwnProperty())
// console.log(ages.hasOwnProperty("Mick"))

Rabbit.prototype.toString = function(){
    return `a ${this.type} rabbit`;
}
console.log(String(blackRabbit))

// Symbols
let sym = Symbol("name");
console.log(sym==Symbol("name"));
Rabbit.prototype[sym]=55;
console.log(blackRabbit[sym])

const toStringSybmol = Symbol("toString");
Array.prototype[toStringSybmol]=function(){
    return `${this.length} cm of blue yarn`;
}
console.log([1,2].toString())
console.log([1,2][toStringSybmol]())

//more about those square brackets
//square brakcets access notation: 
//refering to the binding that holds the symbol
let stringObject={
    [toStringSymbol](){return "a jute rope";}
}
console.log(stringObject[toStringSymbol]())