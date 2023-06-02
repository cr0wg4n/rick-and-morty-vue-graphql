<template>
  <div>
    {{ searchText }}
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/store/searchStore";
import { storeToRefs } from "pinia";

const { searchText } = storeToRefs(useSearchStore());
</script>

