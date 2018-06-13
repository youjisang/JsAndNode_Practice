function myFunction() {
    var day = new Date();

    document.getElementById("demo").innerHTML = "day = " + day;
}

function myFunction2() {
    var msec = Date.parse("March 21, 2012")

    document.getElementById("demo2").innerHTML = "parse day = " + msec;
}

function myFunction3() {
    var day = new Date();

    document.getElementById("demo3").innerHTML = "year = " + day.getFullYear() + " month = " + day.getMonth() + " day = " + day.getDay();

}

function myFunction4() {
    var day = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("demo4").innerHTML = "month = " + months[day.getMonth()] + " days = " + days[day.getDay()];

}

function myFunction5() {
    var today, someday, text;
    today = new Date();
    someday = new Date();
    someday.setFullYear(2100, 0, 14);

    if (someday > today) {
        text = "Today is before January 14, 2100.";
    } else {
        text = "Today is after January 14, 2100.";
    }
    document.getElementById("demo5").innerHTML = text;

}

function myFunction6() {

    document.getElementById("demo6").innerHTML = "Math.PI = " + Math.PI + " Math.round(4.7) = " + Math.round(4.7) + " Math.max(0, 150, 30, 20, -8, -200) = " + Math.max(0, 150, 30, 20, -8, -200);
}

function myFunction7(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

function myFunction8() {
    var x = 10;

    document.getElementById("demo8").innerHTML = Boolean(x);
}

function myFunction9() {
    var x = 5;

    document.getElementById("demo9").innerHTML = x == "5";
}

function myFunction10() {
    var age, voteable;
    age = document.getElementById("age").value; // age의 id를 찾아서 value를 찾는 과정
    voteable = (age < 18) ? "Too young" : "Old enough";

    document.getElementById("demo10").innerHTML = voteable + " to vote.";
}
/**
 *  "2">"12" -> True
 *  
 * 2<"12" -> True
 * 
 */