let salon={
    name:"The Furwash",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },

    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },

    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-5555"
        },
        {
            name:"Lassie",
            age:20,
            gender:"female",
            breed:"Collie",
            service:"Nail Trim",
            owner:"Timmy",
            phone:"555-555-5554"
        },
        {
            name:"Snoopy",
            age:90,
            gender:"male",
            breed:"Beagle",
            service:"Shots",
            owner:"Charlie",
            phone:"555-555-5553"
        },
        {
            name:"McGruff",
            age:100,
            gender:"male",
            breed:"Bulldog",
            service:"Wash",
            owner:"Officer Friendly",
            phone:"555-555-5552"
        }
    
    ]
}

let petNames = ["Scooby","Lassie","Snoopy","McGrufff"]; //need to have this pull from petsRegistered

function displaypetNames(){
    for(let i=0;i<1;i++){
        document.write(petNames);
        
    }
}
displaypetNames();



window.confirm("There are 4 pets registered"); //might need to add variable for number of pets in salon.pet

