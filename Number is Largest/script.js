let a =Number(prompt("Enter your First Number : "));
document.write(`Your First Number is ${a} <br>`);

let b =Number(prompt("Enter your Second Number : "));
document.write(`Your Second Number is ${b} <br>`);

let c =Number(prompt("Enter your Third Number : "));
document.write(`Your Third Number is ${c} <br>`);

if(a==b&& b==c && a==c ){
    document.write(`All Numbers are Equal !`);
}
else if ( a>b && a>c ){
    document.write(`The Largest Number is ${a} <br>`);
}
else if ( b>a && b>c ){
    document.write(`The Largest Number is ${b} <br>`)
}
else{
    document.write(`The Largest Number is ${c} <br>`)
}