const form = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");
const error = document.getElementById("error");

let students = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value.trim();
    let enroll = document.getElementById("enroll").value.trim();

    // Validation
    if (!name || !email || !course || !enroll) {
        error.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        error.textContent = "Invalid email format!";
        return;
    }

    error.textContent = "";

    let student = { name, email, course, enroll };
    students.push(student);

    displayStudents();
    form.reset();
});

function displayStudents() {
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}