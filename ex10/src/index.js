function myFunction()
{
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats:{
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },

        002: {
            artist: "Joe Doe",
            title: "Man",
            release_year: 1983,
            formats:{
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true

        }
    };
}
console.log(myFunction()[2]);
module.exports = myFunction;