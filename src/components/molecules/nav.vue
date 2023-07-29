<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/colors">Colors</RouterLink>
      </nav>
  </header>
</template>
