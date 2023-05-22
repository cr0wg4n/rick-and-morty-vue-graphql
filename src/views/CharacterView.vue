<script setup lang="ts">
import { useRoute } from 'vue-router'
import CharacterController from '@/components/Characters/CharacterController.vue';

const route = useRoute()
const { id } = route.params
</script>

<template>
  <CharacterController :initial-id="Number(id)"/>
</template>

<style scoped>
  a {
    text-decoration: underline;
    color: rgb(45, 45, 255);
  }
</style>
