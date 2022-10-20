// Iteration 1: Names and Input

const hacker1="Bob";
//console.log(`The driver's name is ${hacker1}`);
const hacker2="Maria";
//console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

//console.log(`The name ${hacker1} has ${hacker1.length} characters`)
//console.log(`The name ${hacker2} has ${hacker1.length} characters`)

if (hacker1.length > hacker2.length){
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`)
}
if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters`)
}
if (hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, with ${hacker1.length} characters!`)
}


// Iteration 3: Loops


console.log(hacker1.split('').join(' ').toUpperCase());

let reverse="";
for(let i=hacker1.length-1; i>=0; i--){
    
    reverse+=hacker1[i]

}
console.log(reverse.toUpperCase())

/*
switch(let comp= hacker1.localeCompare(hacker2)){
    case(comp>0):
        console.log(`The driver's name goes first.`)
        break;
    case(comp<0):
        console.log(`Yo, the navigator goes first definitely.`)
        break;
    default;
        console.log(`What?! You both have the same name?`)
        break;

}*/
let maior= hacker1.localeCompare(hacker2)
    console.log(maior)

if(maior<0){
    console.log(`The driver's name goes first.`)
}
if(maior>0){
    console.log(`Yo, the navigator goes first definitely.`)
}
if(maior==0){
    console.log(`What?! You both have the same name?`)
}

