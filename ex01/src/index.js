var myPet =
{    species: "Cat",
    name: "Kitty",
    legs: 4,
    friends: "Ketty " + "Katty"
}


function myFunction(myObject)
{
    return myObject;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction};