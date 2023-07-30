<script setup>
import presentation from '@/views/aboutView/presentation.vue';
import hardSkills from '@/views/aboutView/hardSkills.vue';
import strengths from '@/views/aboutView/strengths.vue';
import projects from '@/views/aboutView/projects.vue';
import contact from '@/views/aboutView/contact.vue';

import skills from '@/components/molecules/skills.vue';

</script>
<template>
  <div class="about">
    <div id="presentation " class="mx-2 mx-sm-3 mb-sm-2 mb-xl-5">
      <presentation />
    </div>
    <div  id="hardSkills" class="">
      <hardSkills />
    </div>
    <div id="strengths" class="">
      <strengths />
    </div>
    <div id="skills">
      <skills :min="false"/>
    </div>
    <div id="projects">
      <projects />
    </div>
    <div id="contact">
      <contact />
    </div>
  </div>
</template>

