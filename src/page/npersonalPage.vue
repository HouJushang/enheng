<template>
  <section class="npersonalPage">
    这里是未登录的个人中心页面
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'npersonal',
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
