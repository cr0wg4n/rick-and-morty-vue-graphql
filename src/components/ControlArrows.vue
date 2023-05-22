<template>
  <div class="w-full h-full">
    <div class="absolute flex items-center h-full">
      <div class="p-3 cursor-pointer">
        <ArrowButton type="fa-arrow-left" @click="left"/>
      </div>
    </div>

    <div class="absolute flex items-center h-full right-0">
      <div class="p-3 cursor-pointer">
        <ArrowButton type="fa-arrow-right" @click="right"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowButton from './ArrowButton.vue';
const emit = defineEmits<{
  (e: 'right'): void
  (e: 'left'): void
}>()

const right = () => {
  emit('right')
}

const left = () => {
  emit('left')
}
</script>

<style scoped>

</style>