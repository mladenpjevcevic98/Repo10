var film = {
    "title": "Titanic",
    "song": "My heart will go on",
    "genre": "Drama"
}

function myFunction(checkProp)
{
        var value = film . hasOwnProperty(checkProp);
        if(value = "False")
        {
            console.log("Not found");
        }
        else
        {
            console.log(checkProp);
        }
}

console.log(myFunction("title"));

module.exports = myFunction;