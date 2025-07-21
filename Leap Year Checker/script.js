let a=Number(prompt("Enter the year you want to check :- "));
document.write(`Your year is ${a} <br>`);

if (a%4===0){
    document.write(`${a} is Leap Year`);
}
else{
    document.write(`${a} is not a Leap Year `)
}