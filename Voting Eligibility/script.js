let a=Number(prompt("Enter your age :"));
if(a>=18 && a<70) {
    document.write(`You are eligible to vote.`);
}else if(a>=70){
    document.write(`You are eligible to vote if you are capable of doing so.`);
}
else{
    document.write(`You are not eligible to vote.`);
}