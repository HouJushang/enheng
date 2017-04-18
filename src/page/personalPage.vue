<template>
  <section class="personalPage">
    这是我的页面
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'personal',
    mounted () {
      pageInfo.header.title = '个人中心'
      pageInfo.header.back = true
    },
    methods: {},
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .indexPage
</style>
