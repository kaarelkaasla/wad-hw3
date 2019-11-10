<template>
    <main id="app">
        <Header/>
        <Container/>
        <Footer/>
    </main>
</template>

<script>

    import Header from "./components/Header";
    import Container from "./components/Container";
    import Footer from "./components/Footer";
    export default {
        name: 'app',
        components: {Footer, Container, Header}
    }
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
