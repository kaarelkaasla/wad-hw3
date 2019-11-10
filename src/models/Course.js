export default class Course {
    constructor(title, semester, grade) {
        this.title = title;
        this.semester = semester;
        this.grade = grade;
    }

    gpaPoints() {
        if (this.grade > 90) {
            return 4;
        }
        if (this.grade > 80) {
            return 3;
        }
        if (this.grade > 70) {
            return 2;
        }
        if (this.grade > 60) {
            return 1;
        }
        if (this.grade > 50) {
            return 0.5;
        } else {
            return 0;
        }
    }
}