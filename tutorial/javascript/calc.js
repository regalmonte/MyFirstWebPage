// function student(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.greeting = function() {
//         return "Hi, my name is " + this.firstName + ". I'm " + age + " years old!";
//     };
// }

// var students = [];
// students.push(new student("Drew", "Thompson", 6));
// students.push(new student("Reg", "Almonte", 7));
// students.push(new student("Owen", "Tabios", 5));

// for (var index = 0; index < students.length; index++) {
//     console.log(students[index].greeting());
// }

// var student = students[0];
// for (var key in student) {
//     console.log(student[key]);
// }

function calculatePercentage(num1, num2) {
    return   (num1 / num2) * 100;
}

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {

    if (!num1.value || !num2.value) {
        alert ("Please enter values in the fields");
        result.innerText = "Answer:";
        event.preventDefault();
    }
    else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        var quotient = x / y;
        var percent = quotient * 100;
        //alert(percent);
        result.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});

// num1.value = 1;
// num2.value = 12;
// var percentResult = calculatePercentage(num1.value, num2.value);
// result.innerText = "Result is " + percentResult + "%.";