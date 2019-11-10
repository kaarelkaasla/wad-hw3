<template>
    <div id="courses-container" class="tab">
        <h1 class="title">Courses</h1>
        <table id="courses">
            <thead>
            <tr>
                <th>#</th>
                <th>Course Title</th>
                <th>Semester</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(course, id) in courses" v-bind:key="course.id">
                <td>{{ id + 1 }}</td>
                <td>{{ course.title }}</td>
                <td>{{ course.semester }}</td>
                <td>{{ course.grade }}</td>
            </tr>
            </tbody>
        </table>
        <br>
        <br>
        <div>
            <button id="add-course-button" class="blue-button" @click="showForm = !showForm">+</button>
            <span id="add-course" v-if="showForm">
                <input class="input" type="text" placeholder="Course title" v-model="title">
                <input class="input" type="number" min="1" max="8" placeholder="Semester" v-model.number="semester">
                <input class="input" type="number" min="0" max="100" placeholder="Grade" v-model.number="grade">
                <button class="green-button" id="save-course" @click="addCourse(title, semester, grade)">Save</button>
                <button class="grey-button" type="reset" @click="resetForm" id="cancel-course">Cancel</button>
            </span>
        </div>
    </div>
</template>

<script>
    import Course from "../models/Course";
    export default {
        name: "Courses",
        data: () => {
            return {
                courses: [
                    new Course("Algorithms", 1, 80),
                    new Course("Operating Systems", 2, 79),
                    new Course("Artificial Intelligence", 3, 74),
                    new Course("Computer Graphics", 3, 96)
                ],
                showForm: false,
                title: "",
                semester: "",
                grade: ""
            }
        },
        methods: {
            addCourse: function (title, semester, grade) {
                let course = new Course(title, semester, grade);
                this.courses.push(course);
                this.title = '';
                this.semester = '';
                this.grade = '';
                this.showForm = false;
            },
            resetForm: function () {
                this.title = '';
                this.semester = '';
                this.grade = '';
                this.showForm = false;

            }
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    table th {
        padding: 8px 12px;
        text-align: left;
        border: 1px solid #cbcbcb;
        background-color: #03A9F4;
        color: #ffffff;
    }

    table td {
        padding: 8px 12px;
        border: 1px solid #cbcbcb;
    }

    .blue-button {
        background-color: #2196F3;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .green-button {
        background-color: #69f378;
        color: #ffffff;
        border: none;
        padding: 10px 10px;
    }

    .grey-button {
        background-color: #e1e8e6;
        color: #ffffff;
        border: none;
        padding: 10px 20px;
    }

    .input {
        border: 1px solid #cccccc;
        padding: 10px 20px;
        min-width: 135px;
    }
</style>