<template>
  <section class="indexPage">
    <dl class="loginForm">
      <dd>
        <span>帐号</span><input type="text" placeholder="请输入手机号">
      </dd>
      <dd>
        <span>密码</span><input type="password" placeholder="请输入密码">
      </dd>
    </dl>
    <button class="formBtn">登录</button>
    <div class="toRigister">
      <router-link :to="{name:'register'}">去开户</router-link>
    </div>
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'index',
    mounted () {
      pageInfo.header.title = '登录'
      pageInfo.header.back = true
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  .indexPage
    .loginForm
      background-color: #fff
      margin-top: 15px
      dd
        height: 35px
        display: flex
        span
          width: 60px
          text-align: center
          font-size: 13px
          line-height: 36px
        input
          flex-grow: 1
      dd:first-child
        border-bottom: 1px solid #dfdfdf
    .formBtn
      display: block
      width: 90%
      height: 35px
      text-align: center
      background-color: $themeColor
      color: #fff
      margin: 15px auto
      border-radius: 4px
    .toRigister
      width: 90%
      margin: 0 auto
      a
        color: $themeColor
        font-size: 12px
</style>
