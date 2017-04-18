<template>
  <section class="contactPage">
    this is contact us page
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'about',
    mounted () {
      pageInfo.header.title = '联系我们'
      pageInfo.header.back = true
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  .contactPage
</style>
