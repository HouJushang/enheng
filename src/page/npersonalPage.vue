<template>
  <section class="npersonalPage">
    <div class="top">
      <div class="avatar">
        <img src="../assets/icon_head.png" alt="">
      </div>
      <router-link class="loginBtn" :to="{name:'login'}">
        立即登录
      </router-link>
    </div>
    <div class="personalNav">
      <router-link :to="{name: 'about'}" class="navItem">
        <img src="../assets/my_icon_aboutus.png" alt="">关于我们
      </router-link>
      <router-link :to="{name: 'contact'}" class="navItem">
        <img src="../assets/my_icon_contactus.png" alt="">联系客服
      </router-link>
    </div>
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
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  .npersonalPage
    .top
      height: 150px
      background-color: $themeColor
      text-align: center
      overflow: hidden
      .avatar
        margin: 18px 0
        img
          width: 64px
      a
        color: #fff
        background: #43AFE7
        border-radius: 20px
        font-size: 14px
        padding: 5px 15px
    .personalNav
      background-color: #fff
      margin-top: 15px
      a
        display: block
        height: 42px
        font-size: 14px
        line-height: 43px
        border-bottom: 1px solid #dfdfdf
        position: relative
        &:last-child
          border-bottom: none
        &:after
          content: ' '
          position: absolute
          right: 13px
          top: 16px
          transform: rotate(45deg)
          width: 8px
          height: 8px
          border-top: 2px solid #ccc
          border-right: 2px solid #ccc
        img
            width: 22px
            vertical-align: middle
            margin: 0 12px

</style>
