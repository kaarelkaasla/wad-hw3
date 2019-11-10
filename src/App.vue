<template>
    <main id="app">
        <Header/>
        <Container :user="user" :courses="courses"/>
        <Footer/>
    </main>
</template>

<script>

    import Header from './components/Header';
    import Container from './components/Container';
    import Footer from './components/Footer';
    import Course from './models/Course';
    import User from './models/User';

    export default {
        name: 'App',
        data: function () {
            return {
                user: new User('John', 'Doe', '11/10/1990', 'Software Engineering', '2.75'),
                courses: [
                    new Course('Agile software development', 1, 82),
                    new Course('System modeling', 1, 85),
                    new Course('Object-oriented programming', 2, 99),
                    new Course('Estonian language Level A2', 2, 65)
                ]
            };
        },
        watch: {
            courses: function (val) {
                this.user.gpa = parseFloat(val.reduce(function (gpa, course) {
                    return gpa + course.gpaPoints() / val.length;
                }, 0).toFixed(2));
            }
        },
        components: {
            Container, Footer, Header
        }
    };
</script>

<style>
    * {
        box-sizing: border-box;
        font-family: 'Livvic', sans-serif;
    }

    html, body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        background-color: #eaeaea;
    }

    main {
        position: relative;
        min-height: 100%;
        padding-bottom: 110px;
    }
</style>
