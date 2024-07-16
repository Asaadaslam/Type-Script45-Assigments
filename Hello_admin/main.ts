let user_name : string[] = ['admin', 'John' , 'Peter' , 'Parker' , 'venom'];

for (let i = 0 ; i <user_name.length ; i++) {

    if(user_name[i] === 'admin')

        console.log("Hello admin would you like to see status report")

    else{
        console.log(`Hello ${user_name[i]}, "Thank you for logging again`)
    }

}


let userName : string[] = ['admin', 'John' , 'Peter' , 'Parker' , 'venom'];

userName.forEach(userName => {

    if (userName === 'admin')

        { console.log("Hello admin would you like to see status report")
}

else {

    console.log(`Hello ${user_name}, "Thank you for logging again`);
}

});
