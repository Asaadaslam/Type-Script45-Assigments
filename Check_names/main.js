"use strict";
// let current_users : string [] = ['Asaad' , 'jawwad' , 'hassan' , 'mohsin' , 'haider'] ;
// let new_users : string [] = ['Asaad' , 'khalid' , 'david', 'haider' , 'parker'];
// new_users.forEach(newUserName =>
//     {
//     let lowerCase = newUserName.toLowerCase();
//     if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
//         console.log(`The user name ${lowerCase} is not available`)
//     }
//     else {
//         console.log(`The use name ${newUserName} is available`)
//     }
//     }
// );
let current_users = ['Asaad', 'jawwad', 'hassan', 'mohsin', 'haider'];
let new_users = ['Asaad', 'khalid', 'david', 'haider', 'parker'];
new_users.forEach(newUserName => {
    let lowerCase = newUserName.toLowerCase();
    if (current_users.map(C_user => C_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The user name ${lowerCase} is not available`);
    }
    else {
        console.log(`The user name ${newUserName} is available`);
    }
});
