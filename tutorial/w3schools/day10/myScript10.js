function myFunction() {
    var x = function (a, b) {
        return a * b
    }
    document.getElementById("demo").innerHTML = x(4, 3);

}

function myFunction2() {
    /**
     * 함수 파라미터 안에 문자들은 단순 문자가 아님.
     * 변수로써 기능도 함.
     */
    var myFunction = new Function("a", "b", "return a * b");
    document.getElementById("demo2").innerHTML = myFunction(4, 3);
}

function myFunction3() {
    (function () {
        document.getElementById("demo3").innerHTML = "Hello! I called myself";
    })();
}

function myFunction4(a, b) {
    return a * b;
}

function myFunction5() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function myFunction6(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}
