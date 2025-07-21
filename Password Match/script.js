const password=2486;

let a=Number(prompt("Enter the password:"));
if(a===password) {
    document.write(`Access Granted.`);
}else {
    document.write(`Access Denied.`);
}