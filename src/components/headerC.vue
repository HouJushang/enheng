<template>
  <header>
    <div v-if="pageInfo.header.back" class="back" @click="back">
    </div>
    {{pageInfo.header.title}}

  </header>
</template>

<script>
  import pageInfo from '../data/pageInfo'
  export default {
    name: 'index',
    data () {
      return {
        pageInfo
      }
    },
    mounted () {
      this.pageInfo.header.back = false
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import "../sass/config"
  header
    display: block
    height: 40px
    text-align: center
    background-color: $themeColor
    position: relative
    line-height: 41px
    color: #fff
    .back
      position: absolute
      left: 0
      height: 100%
      width: 50px
      &:after
        content: ' '
        position: absolute
        top: 13px
        left: 16px
        width: 11px
        height: 11px
        color: #fff
        border-left: 2px solid #fff
        border-top: 2px solid #fff
        transform: rotate(-45deg)
</style>
