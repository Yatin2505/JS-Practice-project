const password=2486;
const username="yatin05"

let a=prompt("Enter your Username :-");
let b=Number(prompt("Enter your Password :-"))
if(b===password &&  a===username) {
    alert(`Access Granted.`);
}else {
    alert(`Access Denied.`);
}