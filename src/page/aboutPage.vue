<template>
  <section class="aboutPage">
    this is about us page
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'about',
    mounted () {
      pageInfo.header.title = '关于我们'
      pageInfo.header.back = true
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  .aboutPage
</style>
