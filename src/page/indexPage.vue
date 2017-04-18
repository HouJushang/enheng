<template>
  <section class="indexPage">
    <router-link :to="{name: 'login'}">登录</router-link>
    <router-link :to="{name: 'register'}">去开户</router-link>
    <router-link :to="{name: 'npersonal'}">未登录个人中心</router-link>
    <router-link :to="{name: 'personal'}">个人中心</router-link>
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'index',
    mounted () {
      pageInfo.header.title = '首页'
      pageInfo.header.back = false
    },
    methods: {},
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .indexPage
    a
      display: block
      height: 40px
      line-height: 41px
      border: 1px solid #ccc
      margin: 30px
      font-size: 14px
      text-align: center
      background-color: #3d9fbd
      color: #fff
      border: none
      border-radius: 3px
</style>
