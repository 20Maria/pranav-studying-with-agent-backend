let students = [
    {name: "Masha", age: 25, grades: [2, 2, 2, 1, 1]},
    {name: "Eric", age: 25, grades: [2, 1, 3, 1, 2]},
    {name: "Ramona", age: 25, grades: [1, 1, 1, 2, 1]}
];

function getAverageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length
}

function printStudentReport(students) {
    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];
        let avg = getAverageGrade(currentStudent.grades);
        console.log("Name: " + currentStudent.name + ", Average: " + avg);
    }

}
printStudentReport(students);
