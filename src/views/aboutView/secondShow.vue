<script setup>
import topOfMe from '@/components/molecules/topOfMe.vue'
import hardSkills from '@/components/molecules/hardSkills.vue';
import strengths from '@/components/molecules/strengths.vue';
</script>

<template>
    <div class="display container">
        <div id="strengths" class="">
        <strengths />
      </div>
      <div  id="hardSkills" class="">
        <!-- <hardSkills /> -->
        <topOfMe />
      </div>
    </div>
</template>
<style lang="scss">
.display{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  #strengths{
    height: 55vh;
  }
  #hardSkills{
    flex-grow: 1;
  }
}
</style>