<template>
  <div class="_center text-white h-screen flex-col">
    <div class="text-6xl md:text-8xl">
      Not Found
    </div>
    <RouterLink to="/" class="text-gray-400">
      back to home
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
