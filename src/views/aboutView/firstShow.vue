<script setup>
import skills from '@/components/molecules/skills.vue';
import presentation from '@/components/molecules/presentation.vue';
</script>
<template>
    <div class="firstShow ">
      <div id="presentation " class="">
        <presentation />
      </div>
      <div id="skills">
        <skills :min="false"/>
      </div>
    </div>
</template>
<style scoped>
.firstShow{
    display:flex;
    flex-direction: column;
    height: 100%;
    margin:8vh 0;
    gap:.5vh;
}
#presentation{
    height: 35vh;
}
#skills{
    flex-grow: 1;
    height: 40vh;
}

</style>