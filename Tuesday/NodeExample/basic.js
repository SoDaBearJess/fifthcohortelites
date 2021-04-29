var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = firstname + " " + lastname;
    }
    return Student;
}());
var user = new Student("Jessna", "Baumann");
document.body.textContent = user.fullName;
//document.getElementById("student").innerHTML = user.firstName;
function switchStudent(student, switchname, num) {
    student.firstName = switchname;
    var span = document.createElement("p");
    span.innerText = "The Logarithm of " + num + " is -> " + Math.log(num) + "\n"; // By default base E of number
    document.body.appendChild(span);
}
//document.body.textContent = user.firstName;
switchStudent(user, "Chris", 8);
//document.getElementById("student").innerHTML = user.firstName;
