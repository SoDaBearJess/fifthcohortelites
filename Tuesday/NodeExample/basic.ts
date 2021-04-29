class Student {
    fullName: string;
    firstName: string;
    lastName: string;
    constructor(
        public firstname: string,
        public lastname: string
    ) {
        this.fullName = firstname + " " + lastname;
    }
}
let user = new Student("Jessna", "Baumann");
document.body.textContent = user.fullName;
//document.getElementById("student").innerHTML = user.firstName;

function switchStudent(student: Student, switchname: string, num: number) {
    student.firstName = switchname;
    var span = document.createElement("p");
      span.innerText = "The Logarithm of " + num + " is -> " + Math.log(num) + "\n"; // By default base E of number
      document.body.appendChild(span);
}

//document.body.textContent = user.firstName;
switchStudent(user, "Chris", 8);
//document.getElementById("student").innerHTML = user.firstName;
