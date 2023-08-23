<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <div id="content" class="">
    <RouterView v-slot="{ Component}" >
      <Transition name="route" mode="out-in">
        <component :is="Component" ></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style >
.route-enter-from{
  opacity:0;
  /* transform: translateY(100px); */
}
.route-enter-active{
  transition: all 1.5s ease-out;
}
.route-leave-from{
  opacity:0;
  /* transform: translateY(100px); */
}
.route-leave-active{
  transition: all 1.5s ease-in;
}
</style>