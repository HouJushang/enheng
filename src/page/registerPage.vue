<template>
  <section class="registerPage">
    <dl class="registerForm">
      <dd>
        <span>帐号</span><input type="text" placeholder="请输入手机号">
      </dd>
      <dd>
        <span>验证码</span><input type="text" placeholder="请输入手机号">
        <div>
          <button>获取验证码</button>
        </div>
      </dd>
      <dd>
        <span>密码</span><input type="password" placeholder="请输入密码">
      </dd>
      <dd>
        <span>确认密码</span><input type="password" placeholder="请输入密码">
      </dd>
    </dl>
    <button class="formBtn">提交</button>
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'register',
    mounted () {
      pageInfo.header.title = '注册'
      pageInfo.header.back = true
    },
    methods: {},
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  .registerPage
    .registerForm
      background-color: #fff
      margin-top: 15px
      dd
        height: 35px
        border-bottom: 1px solid #dfdfdf
        display: flex
        span
          width: 70px
          text-align: center
          font-size: 13px
          line-height: 36px
        div,input,button
          flex: 1
        button
          display: block
          height: 28px
          margin: 4px auto
          background-color: $themeColor
          color: #fff
          border-radius: 3px
        &:last-child
          border-bottom: none
    .formBtn
      display: block
      width: 90%
      height: 35px
      text-align: center
      background-color: $themeColor
      color: #fff
      margin: 15px auto
      border-radius: 4px
</style>
