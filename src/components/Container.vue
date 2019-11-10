<template>
    <section id="container">
        <section id="main">
            <div class="content">
                <Profile :class="['tab', { 'active': isProfileTabActive() }]" :user="user"/>
                <Courses :class="['tab', { 'active': isCoursesTabActive() }]" :courses="courses"/>
            </div>
            <div class="controls">
                <button id="profile-button" :class="['pill', { 'active': isProfileTabActive() }]"
                        @click="activateProfileTab">Profile
                </button>
                <button id="courses-button" :class="['pill', { 'active': isCoursesTabActive() }]"
                        @click="activateCoursesTab">Courses
                </button>
            </div>
        </section>
    </section>
</template>

<script>
    import Profile from "./Profile"
    import Courses from "./Courses"
    export default {
        name: "Main",
        components: {Courses, Profile},
        data: function () {
            return {
                activeTab: "profile"
            };
        },
        methods: {
            activateCoursesTab: function () {
                this.activeTab = "courses";
            },
            activateProfileTab: function () {
                this.activeTab = "profile";
            },
            isCoursesTabActive: function () {
                return this.activeTab === "courses";
            },
            isProfileTabActive: function () {
                return this.activeTab === "profile";
            }
        },
        props: {
            user: Object,
            courses: Array
        }
    }
</script>

<style scoped>
    #container {
        width: 80%;
        max-width: 900px;
        min-width: 320px;
        padding: 15px;
        background-color: #ffffff;
        margin: 0 auto;
    }

    .content {
        padding: 10px;
        border: 1px solid #cbcbcb;
    }

    .content .tab {
        display: none;
    }

    .content .tab.active {
        display: block;
    }

    .controls .pill {
        border: 1px solid #cbcbcb;
        background-color: #eaeaea;
        padding: 10px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top: none;
        margin-top: -1px;
        outline: none !important;
    }

    .controls .pill.active {
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
    }

    .controls .pill:hover {
        cursor: pointer;
    }
</style>