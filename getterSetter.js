//The get syntax binds an object property to a function that will be called when that property is looked up.
let varyingSize={
    get size(){
        return Math.floor(Math.random()*100)
    }
}
console.log(varyingSize.size)
//The set syntax binds an object property to a function to be called when there is an attempt to set that property.


class Temperature{
    constructor(celsius){
        this.celsius=celsius;
    }
    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value){
        this.celsius=(value-32)/1.8
    }
    //Static methods are methods stored in a class’s constructor, rather than its prototype.
    static fromFahrenheit(value){
        return new Temperature((value-32)/1.8);
    }
}
let temp= new Temperature(32)
console.log(`celsius temp is ${temp.celsius} and in fahrenheit ${temp.fahrenheit}`)
temp.fahrenheit=86
console.log(`with tep.fahrenheit set at 86: Farheneit temp is ${temp.fahrenheit} and in celsius ${temp.celsius}`)
console.log(Temperature.fromFahrenheit(100))
// INstance Of
