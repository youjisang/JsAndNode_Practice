function myFunction() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";

    }
    document.getElementById("demo").innerHTML = "Today is  = " + day;
}

function myFunction2() {
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    var i;
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo2").innerHTML = text;
}

function myFunction3() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i, len, text;
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo3").innerHTML = text;
}

function myFunction4() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 0;
    var len = cars.length;
    var text = "";
    for (; i < len;) {
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("demo4").innerHTML = text;
}

function myFunction5() {
    var txt = "";
    var person = { fname: "John", lname: "Doe", age: 25 };
    var x;
    for (x in person) {
        txt += person[x] + " ";
    }
    document.getElementById("demo5").innerHTML = txt;
}

function myFunction6() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("demo6").innerHTML = text;
}

function myFunction7() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var i = 0;
    var text = "";
    while (cars[i]) {
        text += cars[i] + "<br>";
        i++;
    }
    document.getElementById("demo7").innerHTML = text;
}

function myFunction8() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo8").innerHTML = text;
}

function myFunction9() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo9").innerHTML = text;
}

function myFunction10() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo10").innerHTML = isArray(fruits);
}
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

function myFunction11() {
    var str = "Visit W3Schools!";
    var n = str.search(/w3Schools/i);
    document.getElementById("demo11").innerHTML = n;
}
