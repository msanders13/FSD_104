//object literal
let lion = {
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}

let lion2 = {
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}

//object contstructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("Feeding...");
        this.hunger=this.hunger-2;
    }
}
//create objects
let lionC = new Animal("Simba",true,"Carnivore");
console.log(lionC.feed());

//create a constructor
//school,student,instructor,assignment,courses,exam,
let instructor ={
    nameof:"Professor Plum",
    specialty:"Business",
    otherInfo:true
}
function Teacher(nameOf,otherInfo,specialty){
    this.nameOf=nameOf;
    this.otherInfo=otherInfo;
    this.specialty=specialty;
    }
let Anderson = new Teacher("Mr. Anderson","Masters","Technology");
console.log(Anderson)
console.log(instructor)