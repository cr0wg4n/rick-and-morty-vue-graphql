<template>
  <div class="avatar">
    <img :src="imageUrl" :alt="name">
  </div>
</template>

<script setup lang="ts">
interface CharacterAvatarProps {
  imageUrl?: string,
  name: string
}

defineProps<CharacterAvatarProps>()
</script>

<style lang="scss" scoped>
.avatar {
  & > img {
    border-radius: 50%;
    width: 100%;
    border: 15px solid white;
  }
}
</style>