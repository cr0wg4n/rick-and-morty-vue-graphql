<template>
  <div class="h-screen">
    <div class="_center text-2xl">
      Renderless Component (Slots)
    </div>
    <PasswordChecker 
      v-slot="{ matching, complexity }"
      :password="password" 
      :confirmation="confirmation"
    >
      <div class="form">
        <input type="password" v-model="password" placeholder="password">
        <input type="password" v-model="confirmation" placeholder="confirmation">
      </div>

      <div class="_center m-4">
        <button class="w-20 bg-slate-300 active:scale-95 disabled:opacity-50" :disabled="!matching.value">
          Submit
        </button>
      </div>

      <div class="_center w-full">
        <div :style="{ 
          ...getComplexity(complexity.value),
          height: '20px'
        }" />
      </div>
    </PasswordChecker>
    <hr class="my-5">
    <RenderFunction />
  </div> 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PasswordChecker from './PasswordChecker.vue'
import { DIFICULTY } from './PasswordChecker.vue';
import RenderFunction from './RenderFunction.vue';

function getComplexity(complexity: DIFICULTY) {
  switch (complexity) {
    case DIFICULTY.low:
      return {
        background: 'red',
        width: '33%'
      }
    case DIFICULTY.mid:
      return {
        background: 'blue',
        width: '66%'
      }
    case DIFICULTY.high:
      return {
        background: 'green',
        width: '100%'
      }
    default:
      break;
  }
}

const password = ref('')
const confirmation = ref('')

// To handle error in console
// throw new Error('Error configuration')
</script>

<style scoped>
  .form {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  input {
    display: block;
    width: 200px;
    margin: 8px;
    padding: 5px;
    border-radius: 10px;
  }
  button {
    border-radius: 5px;
  }
</style>