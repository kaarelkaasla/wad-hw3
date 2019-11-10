<template>
    <section id="container">
        <section id="main">
            <div class="content">
                <Profile :class="['tab', { 'active': profileTab() }]" :user="user"/>
                <Courses :class="['tab', { 'active': coursesTab() }]" :courses="courses"/>
            </div>
            <div class="controls">
                <button id="profile-button" :class="['pill', { 'active': profileTab() }]" @click="activateProfile">
                    Profile
                </button>
                <button id="courses-button" :class="['pill', { 'active': coursesTab() }]" @click="activateCourse">
                    Courses
                </button>
            </div>
        </section>
    </section>
</template>

<script>
    import Profile from './Profile';
    import Courses from './Courses';

    export default {
        name: 'Main',
        components: {Courses, Profile},
        data: function () {
            return {
                activeTab: 'profile'
            };
        },
        methods: {
            coursesTab: function () {
                return this.activeTab === 'courses';
            },
            profileTab: function () {
                return this.activeTab === 'profile';
            },
            activateCourse: function () {
                this.activeTab = 'courses';
            },
            activateProfile: function () {
                this.activeTab = 'profile';
            }
        },
        props: {
            user: Object,
            courses: Array
        }
    };
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