function myFunction() {
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    var myFather = new Person("John", "Doe", 50, "blue");
    var myMother = new Person("Sally", "Rally", 48, "green");

    document.getElementById("demo").innerHTML =
        "My father is " + myFather.age + ". My mother is " + myMother.age;
}

function myFunction2() {
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
    Person.prototype.nationality = "English"; // 어떤 경우에 적극적으로 사용할 지 생각해 보기.

    var myFather = new Person("John", "Doe", 50, "blue");
    document.getElementById("demo2").innerHTML =
        "My father is " + myFather.nationality;
}

function myFunction3() {
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName
    };

    var myFather = new Person("John", "Doe", 50, "blue");
    document.getElementById("demo3").innerHTML =
        "My father is " + myFather.name();
}