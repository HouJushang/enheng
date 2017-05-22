<template>
  <section class="confirm" v-if="isShow">
    <div class="confirmContent">
      <div class="title">
        {{title}}
      </div>
      <div class="content" v-html="content">
      </div>
      <div class="buttom">
        <button @click="cancel">
          取消
        </button>
        <button class="waring" @click="confirm">
          确定
        </button>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'confirm',
    props: ['title', 'content', 'isShow', 'resolve', 'reject'],
    methods: {
      cancel () {
        this.isShow = false
        this.reject()
      },
      confirm () {
        this.isShow = false
        this.resolve()
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .confirm
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 99
    background-color: rgba(0, 0, 0, 0.38)
    display: flex
    justify-content: center
    align-items: center
    .confirmContent
      width: 70%
      border-radius: 3px
      overflow: hidden
      .title
        height: 30px
        background-color: #3889d8
        color: #fff
        line-height: 31px
        text-align: center
        font-size: 13px
      .content
        background-color: #fff
        padding: 10px
        font-size: 14px
      .buttom
        padding: 10px
        background-color: #fff
        border-top: 0.5px solid #ccc
        display: flex
        justify-content: space-around
        button
          width: 30%
          padding: 5px 10px
          border-radius: 3px
          background-color: #3889d8
          color: #fff
          font-size: 12px
          &.waring
            background-color: #f7ba2a
</style>
