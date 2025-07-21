let a =Number(prompt("Enter your First Number :- "));
document.write(`Your First Number is ${a} <br>`);

let b =Number(prompt("Enter your Second Number :- "));
document.write(`Your Second Number is ${b} <br>`);

let c =prompt("Enter the  Operation you have to Perform :- ");
document.write(`Operation you have to perform :- ${c} <br>`);

if( c==='+' ){
    document.write(` Total = ${a+b}`);
}
else if( c==='-' ){
    document.write(` Total = ${a-b}`);
}
else if( c==='*' ){
    document.write(` Total = ${a*b}`);
}
else if( c==='/' ){
    document.write(` Total = ${a/b}`);
}
else{
    document.write(`Invalid Operation performed !`);
}