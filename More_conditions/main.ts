
console.log('Equality Test with string:' , "apple" === "apple");

console.log('inequality Test with string:' , ("apple" as string) != "orange");

console.log('lower case Test with:' , "Apple" .toLowerCase() === "apple");

console.log('Equality numerical test:' , 5 === 5);

console.log('inequality numerical test:' , (10 as number) != 5);

console.log('greaterthan numerical test:' , 10 > 5);

console.log('lessthan numerical test:' , 5 < 10);

console.log('greaterthan or equal to numerical test:' , 10 >= 10);

console.log('lessthan or equal to numerical test:' , 5 <= 10);

console.log('And operator test:' , 5 === 5  && 10 > 5 );

console.log('OR operator test:' , 5 === 5  || 10 < 5 );

const fruits : string[] = ['apple', 'orange', 'banana'] 
console.log("Test apple in array:" , fruits.includes('apple'));


console.log("Test grapes is not in array:" , !fruits.includes('grapes'));



