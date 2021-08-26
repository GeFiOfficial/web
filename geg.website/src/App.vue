<template>
  <div id="app">
    <router-view/>
    <pageFoot />
  </div>
</template>

<script>
import pageFoot from '@/components/pagefoot/index.vue'

export default {
  components: {
    pageFoot
  }
}
</script>

<style lang="scss">
</style>
