let magicians : string[] = ['Harry Potter' , 'Hermone' , 'Rod', 'Dumble dor']

function great_magician(magicianArray : string[]){

    for(let i=0 ; i < magicians.length; i++){
        magicians[i] = `The greate ` + magicianArray[i]

    }
};


function show_magicians(magicians : string[]){

    magicians.forEach(element => {

        console.log(element)
    })
}
great_magician(magicians);
show_magicians(magicians);
