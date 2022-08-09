
function fun(){
    var b = 10;
    c();
    console.log(b)
    function c(){
        console.log(b);
    }
}
console.log(b);

fun();
