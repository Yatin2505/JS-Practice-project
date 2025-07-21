let a=Number(prompt("Enter your Total Amount of Bill :- "));
document.write(`Your Total Amount of Bill is ${a} <br>`);

if (a>=1000){

    let b=a*0.1;
    let c=a-b;
    document.write(` Congratulations ! You got the Discount of 10% , <br> Now you have to pay only ${c}rs .  `);
    
}
else{
    document.write(`Get Better Luck Next Time !`)
}