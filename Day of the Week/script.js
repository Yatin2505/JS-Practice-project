let a= Number(prompt("Enter a number between 1 and 7:"));
if (a < 1 || a > 7) {
 document.write("Invalid input. Please enter a number between 1 and 7.");
}
else if (a === 1) {
    document.write("Monday");
}   
else if (a === 2) {
    document.write("Tuesday");
}
else if (a === 3){
    document.write("Wednesday")
}
else if (a === 4){
    document.write("Thursday");
}
else if (a === 5){
    document.write("Friday");
}
else if (a === 6){
    document.write("Saturday");
}
else if (a === 7){
    document.write("Sunday");
}