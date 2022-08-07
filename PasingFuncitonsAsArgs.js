var fun = function printName(name){
    return name
}

function concatenateHello(fn){
    
    console.log("Hello" + " " + fn("Anaamika"));
}

concatenateHello(fun)
