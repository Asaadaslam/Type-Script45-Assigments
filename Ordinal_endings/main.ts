let numbers : number[] = [1,2,3,4,5,6,7,8,9]

for (let num of numbers) {

    let ordinal_endings : string;

    if (num === 1) {

        ordinal_endings = 'st';
    }
    else if (num ===2) {

        ordinal_endings = 'nd';
    }
    else if (num === 3){

        ordinal_endings = 'rd';
    }

    else (ordinal_endings = 'th');

    console.log(`${num}${ordinal_endings}`)
}