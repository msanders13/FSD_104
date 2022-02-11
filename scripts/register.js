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

    pets:[]
}


function displaypetNames(){
    alert(`You have 4{salon.pets.length} pets.`);
    for(let i=0;i<1;i++){
        console.log(salon.pets[i]);
    }    
}    

//create the constructor
function Pet(name,age,gender,breed,service,petOwnerContact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.petOwnerContact=petOwnerContact;
}



let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("txtService");
let petOwnerContact = document.getElementById("txtpetOwnerContact");

function register(){



    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwnerContact.value)
    console.log();
    //push the obj into the array
    salon.pets.push(thePet);
    //clear inputs
    clearInputs();
    //display the array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("You have registered a new pet!");
}

function clearInputs(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtpetOwnerContact").value="";
}

function showPetsCards (){
    document.getElementById('btnClear').hidden = true;
    document.getElementById('headerList').innerHTML="Pets List";
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array for loop
    for(let i=0; i<salon.pets.length; i++){
    //create the card
    console.log(createCard(salon.pets[i],i));
    //append the card into the HTML
    document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);

    }
    
}

function removePet(index){
    if(index <salon.pets.length)
    {
    salon.pets.splice(index, 1);
    }
    showPetsCards();
}

function searchPet(){
    document.getElementById('btnClear').hidden = false;
    let name = document.getElementById('txtSearch').value;
    document.getElementById('headerList').innerHTML = "Search Result:";
    document.getElementById("petList").innerHTML="";
    //travel the array for loop
    for(let i=0; i<salon.pets.length; i++){
    //create the card
    console.log(createCard(salon.pets[i],i));
        //append the card into the HTML
        if(name.toLowerCase() == salon.pets[i].name.toLowerCase())
        {
            document.getElementById("petList").innerHTML += createCard(salon.pets[i], i);
        }
    }
}

function createCard(pet, index=0){
    return `
    <div class="pet-card">
        <h3>${pet.name}</h3>
        <label>Age: ${pet.age}</label>
        <label>Gender: ${pet.gender}</label>
        <label>Breed: ${pet.breed}</label>
        <label>Service: ${pet.service}</label>
        <label>Owner Contact: ${pet.petOwnerContact}</label>
        <button onclick="removePet(${index});">Remove</button>
    </div>
    `;
}

function init(){
    //create 3 pets using the literal constructor
    let scrappy = new Pet("Scrappy",50,"Male","Dane","Grooming","ContactInfo");
    let snoopy = new Pet("Snoopy",40,"Male","Beagle","Nails","Contactinfo");
    let zeus = new Pet("Zeus",7,"Male","Dachsund","Wash","ContactInfo");
    salon.pets.push(scrappy,snoopy,zeus); //push elements into the array
    showPetsCards();
}
window.onload=init;
