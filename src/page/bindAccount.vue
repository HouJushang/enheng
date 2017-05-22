<template>
  <section class="indexPage">
    <dl class="loginForm">
      <dd>
        <span>帐号</span><input type="text" v-model="LoginForm.username" placeholder="账户编号">
      </dd>
      <dd>
        <span>密码</span><input type="password" v-model="LoginForm.password" placeholder="账户密码">
      </dd>
      <dd>
        <span>验证码</span><input type="text" v-model="form.smscode" placeholder="请输入验证码">
        <div>
          <button @click="send">{{smsBtn.font}}</button>
        </div>
      </dd>
    </dl>
    <button class="formBtn" @click="onSubmit">登录</button>
    <div class="toRigister">
      <router-link :to="{name:'bindAccount'}">去开户</router-link>
    </div>
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  import {postRequest} from '../util/request'
  export default {
    name: 'bindAccount',
    data () {
      return {
        smsBtn: {
          font: '获取验证码',
          isClick: true
        },
        TraderAccountForm: {
          account: '',
          password: '',
          smscode: ''
        }
      }
    },
    mounted () {
      pageInfo.header.title = '绑定账户'
      pageInfo.header.back = true
    },
    methods: {
      onSubmit () {
        postRequest({
          url: 'site/login',
          data: {
            LoginForm: this.LoginForm
          }
        }).then(e => {
          sessionStorage.setItem('access_token', e.access_token)
          this.$router.push({name: 'personal'})
        })
      }
    },
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
