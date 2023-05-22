<template>
  <button @click="click" class="button bg-slate-600">
    <VIcons :name="type" scale="1.5" class="text-white"/>
  </button>
</template>

<script setup lang="ts">
interface ArrowButtonProps {
  type: string
}

defineProps<ArrowButtonProps>()


const emit = defineEmits<{
  (e: 'click'): void
}>()

const click = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
  .button {
    border-radius: 100000px;
    padding: 0.5rem;
    user-select: none;
    
    &:active {
      scale: 1.1;
    }
  }
</style>