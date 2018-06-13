function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById("demo").innerHTML = "sort() = " + fruits.sort() + " reverse() = " + fruits.reverse();
}
/**
 *  터미널 사용해서 테스트할 수 있음.
 */

function myFunction2() {
    var points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo2").innerHTML = "points sort() = " + points.sort(function (a, b) { return a - b });
}

// 내림차순

function myFunction3() {
    var points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo3").innerHTML = "points reverse sort() = " + points.sort(function (a, b) { return b - a });
}

// 오름차순

function myFunction4() {
    var points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo4").innerHTML = "points random sort() = " + points.sort(function (a, b) { return 0.5 - Math.random() });
}

// 랜덤 정렬

function myFunction4() {
    var points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo4").innerHTML = " max " + Math.max.apply(null, points) + " min " + Math.min.apply(null, points);
}

function myFunction5() {
    var points = [40, 100, 1, 5, 25, 10];

    document.getElementById("demo5").innerHTML = " test " + myArrayMin(points);
}

function myArrayMin(arr) {
    var len = arr.length
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}


function myFunction6() {

    var cars = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 }
    ];

    document.getElementById("demo6").innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year;


}

function myFunction7() {

    var cars = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 }
    ];
    cars.sort(function (a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    document.getElementById("demo7").innerHTML =
        cars[0].type + " " + cars[0].year + "<br>" +
        cars[1].type + " " + cars[1].year + "<br>" +
        cars[2].type + " " + cars[2].year;
}

