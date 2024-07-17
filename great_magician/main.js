"use strict";
let magicians = ['Harry Potter', 'Hermone', 'Rod', 'Dumble dor'];
function great_magician(magicianArray) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The grate ` + magicianArray[i];
    }
}
;
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
great_magician(magicians);
show_magicians(magicians);
