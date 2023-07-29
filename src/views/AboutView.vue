<script setup>
import presentation from '../components/molecules/presentation.vue';
import skills from '@/components/molecules/skills.vue'
import expertises from '@/components/molecules/expertises.vue'
import projects from '@/components/molecules/projects.vue'
import contact from '@/components/molecules/contact.vue'

import projectTemplate from '@/components/molecules/projectTemplate.vue'
</script>
<template>
  <div class="about">
    <div class="presentation mx-2 mx-sm-3 mb-2">
      <presentation />
    </div>
    <div class="expertises">
      <expertises />
    </div>
    <div class="skills">
      <skills />
    </div>
    <div class="projects">
      <projects />
    </div>
    <projectTemplate />
    <div clasas="contact">
      <contact />
    </div>
    
  </div>
</template>

