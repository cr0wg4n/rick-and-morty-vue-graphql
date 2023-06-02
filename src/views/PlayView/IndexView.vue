<template>
  <div class="h-screen p-10">
    <input type="text" v-model="searchText" width="100px">
    <div class="py-10 w-full text-ellipsis break-words">
      <TextContainer />
      <TextContainer v-fontsize:lg.white="100"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/store/searchStore';
import { storeToRefs } from 'pinia';
import TextContainer from './TextContainer.vue';

const store = useSearchStore()
const { searchText } = storeToRefs(store)
</script>
