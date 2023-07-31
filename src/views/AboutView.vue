<script setup>
import { ref } from "vue";
import firstShow from "@/views/aboutView/firstShow.vue";
import secondShow from "@/views/aboutView/secondShow.vue";
import projects from "@/views/aboutView/projects.vue";
import contact from "@/views/aboutView/contact.vue";
</script>
<template>
    <div class="about">
        <div class="nav">
            <div class="d-flex w-100 h-100">
                <a href="#first">presentation</a>
                <a href="#second">skills</a>
                <a href="#projects">project</a>
                <a href="#contact">contact</a>
            </div>
        </div>
        <div id="first"  class="show">
            <firstShow />
        </div>
        <div id="second" class="show">
            <secondShow />
        </div>
        <div id="projects" class="show">
            <projects />
        </div>
        <div id="contact">
            <contact />
        </div>
    </div>
</template>

<style scoped lang="scss">
.about {
    position: relative;
    .nav {
        position: fixed;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        z-index: 999;
        background: #f9f9f9;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100px;
        opacity: 0.6;
        font-size: 18px;
        div {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 4vh;
        }
    }
}
.show {
    border: solid 3px red;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
}
#second{
  background: var(--dark);
}
</style>
