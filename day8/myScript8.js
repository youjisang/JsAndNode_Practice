function myFunction() {
    var person = "John Doe";
    var person2 = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    document.getElementById("demo").innerHTML = "person = " + person + " " + "person2 = " + person2.firstName + " " + person2.lastName;

    // 객체도 변수 , 그러나 객체에는 많은 값이 포함될 수 있음.
    // 값은 이름: 값 쌍으로 작성
    // JS - 자료형의 거의 대부분이 object임.
    //Associative arrays in PHP
    // Dictionaries in Python
    // Hash tables in C
    // Hash maps in Java
    // Hashes in Ruby and Perl
    // 객체를 new Object();로 선언할 필요가 없음.
    // 그냥 객체 리터럴 메소드를 사용하면됨.
}

function myFunction2() {
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    var x = person;
    x.age = 10;
    document.getElementById("demo2").innerHTML = person.firstName + " is " + person.age + " years old. ";
}

function myFunction3() {
    var person = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
    };
    document.getElementById("demo3").innerHTML =
        person["firstname"] + " is " + person["age"] + " years old.";
}

function myFunction4() {
    var person = {
        firstname: "John",
        lastname: "Doe",
        age: 50,
        eyecolor: "blue"
    };
    person.nationality = "English";
    delete person.age;
    // delete person["age"];
    document.getElementById("demo4").innerHTML =
        person.firstname + " is " + person.nationality + "." + "person age = " + person.age;
}

function myFunction5() {
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    // var person = {
    //     firstName: "John",
    //     lastName : "Doe",
    //     id       : 5566,
    // };
    // person.name = function() {
    //     return this.firstName + " " + this.lastName;
    // };

    document.getElementById("demo5").innerHTML = person.fullName();
}

function myFunction6() {
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.name = function () {
            return this.firstName + " " + this.lastName
        };
    }

    // Create a Person object
    var myFather = new Person("John", "Doe", 50, "blue");

    // Display full name
    document.getElementById("demo6").innerHTML =
        "My father is " + myFather.name();
}

//Adding a Method to a Constructor - 여기까지