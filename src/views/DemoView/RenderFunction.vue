<script lang="ts">
import { Transition, defineComponent, h } from 'vue';

export default defineComponent({
  data: () => ({
    counter: 1
  }),
  render () {
    console.log('rendering...');

    return h('div', { 
      name: 'RenderFunciton', 
      class: 'box', 
      onClick:() => {
        this.counter++
        console.log('demo', this.counter)
      }
    }, 
    [
      h(Transition, {
        mode: 'out-in',
        duration: 1000,
      }, () => [
        h('div', { 
          class: 'little-box another-' + this.counter.toString(),
        }),
      ])
    ])
  }
})
</script>

<style scoped>
  .box {
    background: red;
    width: 100px;
    height: 100px;
  }

  .little-box {
    width: 20px;
    height: 20px;
    background: blue;
  }
</style>