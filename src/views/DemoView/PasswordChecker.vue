<script lang="ts">
import { computed, defineComponent } from 'vue';

export function isMatching(
  password:string|undefined, 
  confirmation: string|undefined
) {
  if(!password || !confirmation) {
    return false
  }

  return password === confirmation
}

export enum DIFICULTY {
  low='low',
  mid='mid',
  high='high',
}

export function getComplexity(text: string): DIFICULTY {
  if(text.length >= 10){
    return DIFICULTY.high
  } else if(text.length >= 7){
    return DIFICULTY.mid
  } else {
    return DIFICULTY.low
  }
}

export default defineComponent({
  props: {
    password: {
      type: String,
      required: true,
    },
    confirmation: {
      type: String,
      required: true,
    }
  },
  setup(props, { slots }) {
    const matching = computed(() => isMatching(props.password, props.confirmation))
    const complexity = computed(()=> getComplexity(props.password))
    return () => {
      if(slots.default) {
        return slots.default({
          matching,
          complexity
        })
      }
    }
  },
})
</script>