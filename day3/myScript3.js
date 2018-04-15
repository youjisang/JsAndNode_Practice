function myFunction() {
    var x = "10";
    var y = 20;
    var z = 30;
    document.getElementById("demo").innerHTML = y + z + x;
}
/**
 * 타입의 순서에 따라, 결과가 확연히 달라짐
 * 숫자+ 숫자 + 문자(숫자계산된 문자 + 문자 = 문자)
 * 문자+ 숫자 + 숫자 (문자)
 * 다름. 
 */
function myFunction2() {
    var x = "100";
    var y = "10";
    var a = x / y;
    var b = x * y;
    document.getElementById("demo2").innerHTML = " a " + a + " b " + b;
}
/**
 *  문자끼리 나누거나 곱하거나 뺄때, 문자가 숫자화되면서 나누어짐.
 *  흠...그런데 더할때는 예외.
 * 
 */

function myFunction3() {
    var x = 100 / "Apple";
    document.getElementById("demo3").innerHTML = isNaN(x);
}

function myFunction4() {
    var myNumber = 2;
    var txt = "";

    while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        txt = txt + myNumber + "<br>";
    }
    document.getElementById("demo4").innerHTML = txt;
}

function myFunction5() {
    var myNumber = 128;
    var result = myNumber.toString(16);
    var result2 = myNumber.toString(4);
    document.getElementById("demo5").innerHTML = result2 + " /// " + result;
}

/**
 * == 는 값만 비교, ===는 타입까지 비교
 * 
 */

function myFunction6() {
    var a = 9.656;
    var b = a.toFixed(2);
    var c = a.toExponential(2);
    var d = a.toPrecision(2);
    document.getElementById("demo6").innerHTML = a + " / " + b + " / " + c + " / " + d;
}

function myFunction7() {
    var cars = ["Saab", "Volvo", "BMW"];
    var cars2 = new Array("Saab", "Volvo", "BMW");
    cars.push("genesis");
    document.getElementById("demo7").innerHTML = cars + " / " + cars2 + " / " + cars[cars.length-1] + " / " + cars2[1];
}
/**
 * 왠만하면 new는 피하라고함.
 */

function myFunction8() {
    var cars = { firstName: "John", lastName: "Doe", age: 46 };
    document.getElementById("demo8").innerHTML = cars["firstName"];
}

function myFunction9() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo9").innerHTML = Array.isArray(fruits);
}
// 기본적으로 어레이리스트는 오브젝트로 타입이 정해지므로, 위와같은 방법으로 리스트인지 아닌지 구분한다.
// 2. function isArray(myArray) {
//     return myArray.constructor.toString().indexOf("Array") > -1;
// }
// 3. fruits instanceof Array