export default class User {
    constructor(firstname, lastname, birthdate, faculty, gpa) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.faculty = faculty;
        this.gpa = gpa;
        this.courses = [];
    }

    calculateGPA() {
        let pointsSum = 0;
        for (let i = 0; i < this.courses.length; i++) {
            if (this.grade > 90) {
                pointsSum += 4;
                break;
            }
            if (this.grade > 80) {
                pointsSum += 3;
                break;
            }
            if (this.grade > 70) {
                pointsSum += 2;
                break;
            }
            if (this.grade > 60) {
                pointsSum += 1;
                break;
            }
            if (this.grade > 50) {
                pointsSum += 0.5;
                break;
            } else {
                pointsSum += 0;
                break;
            }
        }
        this.gpa = (pointsSum / this.courses.length).toFixed(2);

    }
}