function myFunction() {
    try {
        adddlert("Welcome guest!");
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.message;
    }
}

function myFunction2() {
    var message, x;
    message = document.getElementById("message2");
    message.innerHTML = "";
    x = document.getElementById("demo2").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    }
    catch (err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

function myFunction3() {
    var message, x;
    message = document.getElementById("message3");
    message.innerHTML = "";
    x = document.getElementById("demo3").value;
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    }
    catch (err) {
        message.innerHTML = "Error: " + err + ".";
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

function myFunction4() {
    var x = 15 * 5;
    debugger;
    document.getElementById("demo4").innerHTML = x;
}

function myFunction5() {
    var x; // Declare x
    x = 5; // Assign 5 to x
    
    elem = document.getElementById("demo5"); // Find an element 
    elem.innerHTML = x;                     // Display x in the element
}




// EvalError	An error has occurred in the eval() function - Use SyntaxError instead.
// RangeError	A number "out of range" has occurred
// var num = 1;
// try {
//     num.toPrecision(500);   // A number cannot have 500 significant digits
// }
// catch(err) {
//     document.getElementById("demo").innerHTML = err.name;
// }
// ReferenceError	An illegal reference has occurred
// var x;
// try {
//     x = y + 1;   // y cannot be referenced (used)
// }
// catch(err) {
//     document.getElementById("demo").innerHTML = err.name;
// }
// SyntaxError	A syntax error has occurred
// try {
//     eval("alert('Hello)");   // Missing ' will produce an error
// }
// catch(err) {
//     document.getElementById("demo").innerHTML = err.name;
// }
// TypeError	A type error has occurred
// var num = 1;
// try {
//     num.toUpperCase();   // You cannot convert a number to upper case
// }
// catch(err) {
//     document.getElementById("demo").innerHTML = err.name;
// }
// URIError	An error in encodeURI() has occurred
// try {
//     decodeURI("%%%");   // You cannot URI decode these percent signs
// }
// catch(err) {
//     document.getElementById("demo").innerHTML = err.name;
// }

/**
 * implements
interface
let
package
private
protected
public
static
yield
 */