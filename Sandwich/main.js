"use strict";
function sandwich(item) {
    console.log('making your sandwich with:');
    item.forEach(element => console.log(" - " + element));
    console.log('enjoy your sandwich');
}
sandwich(['peti', 'cheese', 'ketchup']);
sandwich(['souce', 'fries', 'lettuce']);
sandwich(['beef', 'chicken', 'vegetable']);
