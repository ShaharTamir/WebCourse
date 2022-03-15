var database = [
    {
        username: "shahar",
        password: "nopassword"
    },
    {
        username: "karam",
        password: "123"
    },
    {
        username: "naama",
        password: "321"
    }
];

var newFeed = [
    {
        username: "Karam",
        timeline: "I'm so tired from Msngr!"
    },
    {
        username: "Naama",
        timeline: "Please learn web, FE, BE, mentoring, hardware, BSc, Masters in 1 month. It's gonna be so great!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);

function isUserValid(un, pass) {
    for(var i = 0; i < database.length; ++i)
    {
        if(un === database[i].username && 
            pass === database[i].password) 
            return true;
    }

    return false;
}

function signIn(un, pass) {
    if(isUserValid(un, pass)) {
        console.log(newFeed);
    }
    else {
        alert("Wrong username and password!");
    } 
}



