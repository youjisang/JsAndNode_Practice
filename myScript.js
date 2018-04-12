function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed."
}
/**
 * 스크립트 파일에서 따로 함수들 관리
 * id값과 함수값만 html에서 적절히 활용하면 됨.
 */
function myFunction2() {
    document.getElementById("demo2").innerHTML = "Paragraph changed."
}

function myFunction3() {
    var x = "volvo" + 16 + 4;
    document.getElementById("demo3").innerHTML = x;
}

function myFunction4() {
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: "50",
        eyeColor: "blue"
    };
    document.getElementById("demo4").innerHTML =
        person.firstName + " is " + person.age + " years old.";

}

function myFunction5() {
    var a = typeof "";
    var b = typeof 3;
    var c = typeof "hi";
    var d;
    document.getElementById("demo5").innerHTML =
        "a = " + a + " / b = " + b + " / c = " + c + " / d = " + d;

}

function myFunction6() {
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    var person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    person = null;
    person2 = undefined;
    document.getElementById("demo6").innerHTML =
        "person = " + person + " / person2 = " + person2 + "null === undefined ? " + person === person2 + "null == undefined ? " + person == person2;

}

function myFunction7() {
    var a = typeof { name: 'John', age: 34 };
    var b = typeof [1, 2, 3, 4];
    var c = typeof null;
    var d = typeof function myFunc() { }

    document.getElementById("demo7").innerHTML =
        " a= " + a + " b= " + b + " c= " + c + " d= " + d;
}

function myFunction8(p1, p2) {
    return p1 * p2;
}

function myFunction8_1() {
    document.getElementById("demo8").innerHTML =
        " function control " + myFunction8(3, 4);
}

/**
 * 자바스크립트는 함수를 변수를 지정해서 사용가능
 * ex) var x = toCelsius(77);
 * var text = "temperature is "+ x + " celsius"
 */


 // js 함수까지....