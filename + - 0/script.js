let a=prompt("Enter the value of a");
let aOriginal=a;
parseInt(a);
if(isNaN(a)){
    document.write(`${aOriginal} is a string value , to check the positive value please enter a valid number !`);
}
else if(a>0) {
    document.write(`The number ${a} is positive.`);
}else if(a<0) {
    document.write(`The number ${a} is negative.`);
}else {
    document.write(`The number is zero.`);
}