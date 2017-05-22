<template>
  <section class="registerPage">
    <dl class="registerForm">
      <dd>
        <span>帐号</span><input type="text" v-model="TraderAccountForm.account" placeholder="账户编号">
      </dd>
      <dd>
        <span>验证码</span><input type="text" v-model="TraderAccountForm.smscode" placeholder="请输入验证码">
        <div>
          <button @click="send">{{smsBtn.font}}</button>
        </div>
      </dd>
      <dd>
        <span>密码</span><input type="password" v-model="TraderAccountForm.password" placeholder="请输入密码">
      </dd>
      <dd>
        <span>确认密码</span><input type="password" v-model="TraderAccountForm.rpassword" placeholder="重复密码">
      </dd>
    </dl>
    <button class="formBtn" @click="submit">提交</button>
  </section>
</template>
<script>
  import pageInfo from '../data/pageInfo'
  import {postRequest} from '../util/request'
  export default {
    name: 'openAccount',
    data () {
      return {
        TraderAccountForm: {
          account: '',
          password: '',
          rpassword: '',
          smscode: ''
        },
        smsBtn: {
          font: '获取验证码',
          isClick: true
        }
      }
    },
    methods: {
      send () {
        if (this.smsBtn.isClick) {
          this.smsBtn.font = '发送中..'
          setTimeout(e => {
            this.smsBtn.font = '获取验证码'
          }, 3000)
          this.isClick = false
        } else {
          return
        }
      },
      submit () {
        postRequest({
          url: `account/add-trader-account?accessToken=${sessionStorage.getItem('access_token')}`,
          data: {
            TraderAccountForm: this.TraderAccountForm
          }
        }).then(e => {
          this.$router.push({name: 'index'})
        })
      }
    },
    mounted () {
      pageInfo.header.title = '开户'
      pageInfo.header.back = true
    },
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
          float: right
          width: 80px
          margin: 4px 5px 0px 0px
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
