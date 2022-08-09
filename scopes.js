let a = 10;
var b = 20;
// let c = 30;
var d = 40
{
    let a = 100;
    let b = 200;
    // var c = 300; -> this will

    console.log("inside block a -> " + a)
    console.log("inside block b -> " + b);
    console.log("inside block c -> " + c);
}
console.log("outside block a -> " + a);
console.log("outside block a -> " + b);
console.log("outside block a -> " + c);
