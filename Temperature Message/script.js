let a=Number(prompt("Enter the Temperature of your Room :- "));
document.write(` Your Room's Temprature is ${a} `);

if(a<=20){
    document.write( " and it's very cold !");
}
else if(a<=30){
    document.write( " and it's Pleasant!");
}
else if(a<=40){
    document.write( " and it's Hot!");
}
else if(a>40){
    document.write( " and it's Very Hot!");
}
else{
    document.write( "Invalid Input !");
}
