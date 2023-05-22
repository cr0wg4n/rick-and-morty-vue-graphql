<script setup lang="ts">
import ControlArrows from '../ControlArrows.vue'
import CharacterBox from '../Characters/CharacterBox.vue';
import { useGetCharacterById } from '@/api/queries';
import { reactive, ref, watch } from 'vue';
import type { Character } from '@/models/character';
import { useRoute, useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
  initialId?: number
}>(), {
  initialId: 1
})

const route = useRoute()
const router = useRouter()

const characterId = ref(props.initialId || 1)

let character = reactive<{ value: Character }>({
  value: {}
})

function validateId(id: number){
  if(id < 1) {
    return 1
  }
  return id
} 

watch(() => route.params.id, async () => {
  if(route.params.id) {
    characterId.value = Number(route.params.id)
  }
}, { immediate:true })

watch(characterId, async () => {
  character.value = await  useGetCharacterById(characterId.value)
}, { immediate: true })


const changeRoute = (id: number) => {
  router.push({
    name: 'character',
    params: {
      id
    }
  })
}

const right = () => {
  characterId.value = validateId(characterId.value + 1)
  changeRoute(characterId.value)
}

const left = () => {
  characterId.value = validateId(characterId.value - 1)
  changeRoute(characterId.value)
}
</script>

<template>
  <ControlArrows @right="right" @left="left"/>
  <div class="p-4 h-screen _center flex-col">
    <CharacterBox :character="character.value"/>
  </div>
</template>

<style scoped>
  a {
    text-decoration: underline;
    color: rgb(45, 45, 255);
  }
</style>
