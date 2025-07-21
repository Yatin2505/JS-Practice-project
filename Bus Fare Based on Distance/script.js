let a =Number(prompt("Enter your Travled Distance :- "));
document.write(`Your Travled Distance is ${a}Km <br>`);

if(a<=5){
    document.write(`You have to pay 10Rs `);
}
else if (a<10){
    document.write(`You have to pay 20Rs `);
}

else {
    document.write(`You have to pay 30Rs`);
}