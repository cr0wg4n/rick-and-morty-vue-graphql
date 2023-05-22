<template>
  <div class="flex flex-col w-full">
    <div class="title font-bold text-white lg:text-9xl md:text-8xl text-5xl m-4 text-center">
      {{ character.name || 'Unknow'}}
    </div>

    <div class="_center m-6">
      <CharacterAvatar 
        :image-url="character.image || '/square.png'"
        name="rick"
        class="md:w-[320px] w-[230px]"
      />
    </div>

    <div class="_center flex-col">
      <div class="text-lg container">
        <div class="w-full">
          <span class="capitalize font-semibold">
            Gender:
          </span>
          <span>
            {{ character.gender || 'Unknow'}}
          </span>
        </div>

        <div class="w-full">
          <span class="capitalize font-semibold">
            Species:
          </span>
          <span>
            {{ character.species || 'Unknow'}}
          </span>
        </div>

        <div class="w-full">
          <span class="capitalize font-semibold">
            Status:
          </span>
          <span>
            {{ character.status || 'Unknow'}}
          </span>
        </div>

        <div class="w-full">
          <span class="capitalize font-semibold">
            Type:
          </span>
          <span>
            {{ character.type || 'Unknow'}}
          </span>
        </div>
      </div>
      <div class="p-3 cursor-pointer">
        <ArrowButton type="fa-dice" @click="random"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from '@/models/character';
import CharacterAvatar from './CharacterAvatar.vue';
import ArrowButton from '../ArrowButton.vue';
import { useRouter } from 'vue-router';
import { randomCharacterId } from '@/utils';

interface CharacterBoxProps {
  character: Character
}

const router = useRouter()
const props = defineProps<CharacterBoxProps>()

const random = () => {
  router.push({
    name: 'character',
    params: {
      id: randomCharacterId()
    }
  })
}
</script>

<style scoped>
  .title {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .container {
    
    background: rgba(0,0,0, 0.09);
    padding: 0.8rem;
    border-radius: 0.4rem;
    width: 300px;
  }
</style>