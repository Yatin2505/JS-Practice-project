let a =Number(prompt("Enter your Age :- "));
document.write(`Your age is ${a} <br>`);

if(a<=5){
    document.write(`You got Free Entry with your Parents !`);
}
else if (a<18){
    document.write(`You have to pay 100Rs for the Movie Ticket !`);
}
else if (a<60){
    document.write(`You have to pay 150Rs for the Movie Ticket !`);
}
else {
    document.write(`You have to pay 120Rs for the Movie Ticket !`);
}