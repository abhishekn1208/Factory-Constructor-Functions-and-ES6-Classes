function animal (noOfLegs ,vegetarian ){
    let obj = {}

    obj.noOfLegs = noOfLegs;
    obj.vegetarian = vegetarian;

    obj.eat=()=>{
        return "eating..."
    }
    obj.greet =()=>{
        return `Hi, I have ${noOfLegs} legs.`
    }
    return obj
}

let anm = animal(4,true)
console.log(anm)
console.log(anm.eat())
console.log(anm.greet())

//constructor function

 function AnimalCF(noOfLegs ,vegetarian){
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat=()=>{
        return "eating..."
    }
    this.greet =()=>{
        return `Hi, I have ${noOfLegs} legs.`
    }
 }

 let animalCF = new AnimalCF(4, true);
 console.log(animalCF)
 console.log(animalCF.eat()); 
console.log(animalCF.greet()); 

//factory function to an ES6 class

class AnimalES6{
    constructor(noOfLegs ,vegetarian ){
        let obj = animal.call(this,noOfLegs,vegetarian)
        return obj
    }
}
let animalES6 = new AnimalES6(4, true);
console.log(animalES6)
console.log(animalES6.eat()); 
console.log(animalES6.greet()); 