
let Guest_list : string [] = ['Imran Khan' , 'Mawaz' ,' zardari'];

// for(let i=0; i<Guest_list.length; i++){

// console.log( 'Dear MR.' + Guest_list[i ] + '\n\n it is our pleasure to invite you in party. \n Thank you')

// }


let absent_Guest : string = 'Imran Khan';
let new_Guest : string = 'Imran Khan';

Guest_list[0] = new_Guest;

for(let i=0; i<Guest_list.length; i++){

    console.log( 'Dear MR.' + Guest_list[i] + '\n\n it is our pleasure to invite you in party. \n Thank you')

}

console.log(`${absent_Guest} is not comimh to the party`)

console.log("Good news we found a new larger table so we are inviting 3 more guests");

Guest_list.unshift('sir zia khan');
Guest_list.splice(2 , 0 , 'maryam nawaz');
Guest_list.push('Bilawal')


for(let i=0; i<Guest_list.length; i++){

    console.log( 'Dear MR.' + Guest_list[i] + '\n\n it is our pleasure to invite you in party. \n Thank you')

}