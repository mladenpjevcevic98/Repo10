var myFood = {
    vegetable: "Carrot",
    fruit: "Orange",
    drink: "Watter"
};

function myFunction(myObject)
{
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood["fruit"];
    var drinkValue = myFood["drink"];

    return {vegetableValue, fruitValue, drinkValue};
}

console.log(myFunction(myFood));

module.exports = myFunction(myFood);