<template>
  <section class="personalPage">
    <div class="top">
      <div class="avatar">
        <img src="../assets/my_icon_head.png" alt="">
      </div>
      <p class="title">
        我的资产
      </p>
      <p class="number">
        1200.00
      </p>
    </div>
    <div class="personalNav">
      <div class="navItem" @click="topUp">
        <img src="../assets/my_icon_chongzhi.png" alt="">充值

      </div>
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
    name: 'personal',
    mounted () {
      pageInfo.header.title = '个人中心'
      pageInfo.header.back = true
    },
    methods: {
      topUp () {
        alert('调用充值接口')
      }
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  .personalPage
    .top
      height: 150px
      background-color: $themeColor
      text-align: center
      overflow: hidden
      .avatar
        margin: 12px 0
        img
          width: 64px
      .title
        color: #99D3FF
        font-size: 13px
        margin-bottom: 5px
      .number
        font-size: 18px
        color: #fff
    .personalNav
      background-color: #fff
      margin-top: 15px
      .navItem
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
