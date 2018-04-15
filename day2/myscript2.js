function myFunction() {
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";
}

function myFunction2() {
    var person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    document.getElementById("demo2").innerHTML =
        person2["firstName"] + " " + person2["lastName"];
}

function myFunction3() {
    var person3 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById("demo3").innerHTML =
        person3.fullName();// 함수를 나타내는 ()을 꼭 체크해줄 것, 그냥 property가 아님.
}

/**
 * var x = new String(); 이런식으로 선언하면, 오브젝트타입으로 선언됨
 * 
 */


/**
 * 지역변수같은 경우는 기능이 다하면, 삭제된다. 그러나 전역변수같은 경우는 브라우져가 종료되기 전까지 계속해서 살아있다.
 */

function myFunction4() {
    document.getElementById("demo4").innerHTML = Date();
}

function myFunction5() {
    var x = "John";
    var y = new String("John");
    document.getElementById("demo5").innerHTML =
        "x(str) = " + x + " y(obj) = " + y + " x===y  " + (x === y) + " x==y " + (x == y);
}

function myFunction6() {
    var x = new String("John");
    var y = new String("John");
    document.getElementById("demo6").innerHTML =
        "x(obj) = " + x + " y(obj) = " + y + " x===y  " + (x === y) + " x==y " + (x == y);
}

function myFunction7() {
    var str = "Please locate where 'locate' occurs!";
    var pos = str.indexOf("locate");
    var pos2 = str.lastIndexOf("locate");
    var pos3 = str.search("locate");
    document.getElementById("demo7").innerHTML =
        "indexof() = " + pos + " lastIndexOf() =  " + pos2 + " search() = " + pos3;
}

function myFunction8() {
    var str = "Apple, Banana, Kiwi";
    var res = str.slice(7, 13);
    var res2 = str.substring(7, 13);
    var res3 = str.substr(7, 6);
    document.getElementById("demo8").innerHTML =
        "res = " + res + " res2 = " + res2 + " res3 = " + res3;
}

function myFunction9(){
    var str = "Please visit Microsoft and Microsoft!";
    var n = str.replace("Microsoft","W3Schools");
    document.getElementById("demo9").innerHTML =
       n;
       /**
        * 이밖에도 split,charAt(),chartAtCodeAt(),concat() 등이 있다.
        */
}


// String method 까지 공부함.