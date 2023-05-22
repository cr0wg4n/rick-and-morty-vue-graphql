<template>
  <div class="bg-orange-500 relative">
    <RouterView />
    <span class="text-center absolute bottom-0 w-full py-3 text-sm text-white">
      Made with ❤️ by 
      <a href="http://cr0wg4n.github.io" target="_blank" rel="noopener noreferrer"
        class="pl-1"
      >
        cr0wg4n
      </a>,
      powered by 
      <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer"
        class="pl-1"
      >
        https://rickandmortyapi.com
      </a>
    </span>
  </div>
</template>

<style scoped>
  a {
    text-decoration: underline;
    color: rgb(27, 27, 61);
  }
</style>
