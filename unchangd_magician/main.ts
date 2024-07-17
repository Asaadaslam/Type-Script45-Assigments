let magicians : string[] = ['Harry Potter' , 'Hermone' , 'Rod', 'Dumble dor']


function copyArray(arr: string[]){

    return [...arr]
}

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

const copyMagicianarray = copyArray(magicians)

great_magician(copyMagicianarray);

console.log('This is my orignal array')
show_magicians(magicians);

console.log('This is my modified array')
show_magicians(copyMagicianarray);