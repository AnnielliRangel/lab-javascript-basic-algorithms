// Iteration 1: Names and Input

const hacker1="Annielli";
//console.log(`The driver's name is ${hacker1}`);
const hacker2="Marianne";
//console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

//console.log(`The name ${hacker1} has ${hacker1.length} characters`)
//console.log(`The name ${hacker2} has ${hacker1.length} characters`)

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has${hacker1.length} characters`)
}
if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, with ${hacker1.length} characters!`)
}


// Iteration 3: Loops


console.log(hacker1.split('').join(' '));


