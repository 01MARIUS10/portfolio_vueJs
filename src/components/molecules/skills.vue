<script setup>
import {ref} from 'vue'
import skill from '../cellules/skill.vue';
const images = ref([
    "/image/skills/html.png",
    "/image/skills/css.png",
    "/image/skills/js.png",
    "/image/skills/php.png",
    "/image/skills/vuejs.png",
    "/image/skills/laravel.png"
])
</script>
<template>
<div id="skills" class="skils d-flex">
    <skill v-for="image in images" :image="image"/>
    </div>
</template>