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
html , body ,#app, #content{
  width: 100%;
  overflow: hidden;
}
#app ,#content{
  height: 100lvh;
}
.route-enter-from{
  opacity:0;
}
.route-enter-active{
  transition: all 2.5s ease-out;
}


</style>