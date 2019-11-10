<template>
    <div id="profile-container" class="tab">
        <div id="profile">
            <div class="avatar">
                <img src="../assets/me.png" id="picture" alt="My picture">
            </div>
            <div class="info">
                <ul>
                    <li id="name">{{user.firstname}} {{user.lastname}}</li>
                    <li id="birthdate">{{user.birthdate}}</li>
                    <li id="faculty">{{user.faculty}}</li>
                </ul>
            </div>
            <div id="gpa">
                <strong>{{user.gpa}}</strong>
            </div>
            <div class="clear-fix"></div>
        </div>
    </div>
</template>

<script>
    import User from '../models/User';
    export default {
        name: "Profile",
        props: {
            user: {
                type: User
            }
        }
    }
</script>

<style scoped>
    .clear-fix {
        clear: both;
    }

    #profile {
        border-bottom: 1px dashed #a7a7a7;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    #profile div:not(.clear-fix) {
        height: 190px;
        float: left;
        position: relative;
    }

    .avatar {
        width: 35%;
        text-align: center;
    }

    .avatar img {
        width: 180px;
    }

    .info {
        width: 45%;
    }

    #gpa {
        width: 20%;
    }

    #gpa strong {
        position: absolute;
        width: 100%;
        height: 60px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto auto;
        font-size: 60px;
        line-height: 60px;
        text-align: center;
    }
</style>