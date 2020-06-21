const labynode = require("./index");

// Status Testcase
labynode.getStatus(function(status){
    console.log(status);
})

//Cosmetics Testcase
labynode.getCosmetics("ec60a990-2290-4618-a1d7-578ed7da119c", function(cosmetics) {
    console.log(cosmetics);
})
