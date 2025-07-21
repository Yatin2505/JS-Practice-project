let a=prompt("Enter the Light on The Traffic signal :");
let b=a.toLowerCase();

    if ( b==='red'){
        document.write(`Stop!`)
    }
else if ( b==='yellow'){
    document.write(`Ready!`)
}
else if ( b==='green'){
    document.write(`Go!`)
}
else{
    document.write(`Invalid Input!`)
}
