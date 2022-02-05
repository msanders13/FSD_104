let names = ["Victoria","Mark","Mike","Phil"];
console.log(names);

let mixed = [99,"Derek",true,null,45,"Hello"];//will display output for appts 
console.table(mixed);

function displayNames(){
    for(let i=0;i<names.length;i++){
        console.log(names[0]);
    }
}
//displayNames();

let ages = ["3","6","9","12","15"];
//travel the ages array
function displayAges(){
    for(let i=0;i<ages.length;i++){
        console.log(ages[i]);
    }
}    
//displayAges();

//object literal

let student={
    name:"Joey",
    age:80,
    student:true,
    grade:"A-",
    music:["Eminem","ColdPlay","Rolling Stones"],
    address:{
        city:"San Diego",
        country:"USA"
    }
}
console.log(student.address.country); //both of these lines are doing the same thing but different ways
console.log(student["music"][0]);//other line, same result = displayed property* console.log(student.music[0]); is another way to write this line

let students=[
    {
        name:"Guillermo",
        age:24,
        activeStudent:true
    },
    {
        name:"Arturo",
        age:23,
        activeStudent:true
    },
    {
        name:"Mark",
        age:30,
        activeStudent:false
    }
]

console.log(students);