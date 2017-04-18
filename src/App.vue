<template>
  <div id="app">
    <headerC title="首页"></headerC>
    <router-view></router-view>
  </div>
</template>
<script>
  import headerC from './components/headerC.vue'
  import pageInfo from './data/pageInfo'
  export default {
    name: 'app',
    data () {
      return {
        pageInfo
      }
    },
    components: {
      headerC
    }
  }
</script>

<style lang="sass">
  @import "sass/config"
  body,dd,dl
    margin: 0px
    padding: 0px
  input,button
    outline: none
    border: none
  a
    text-decoration: none
    color: #2c3e50
  button
    border: none
  body, html, #app
    height: 100%

  #app
    font-family: HelveticaNeue, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    max-width: 375px
    min-width: 320px
    margin: 0 auto
    background: $pageBgColor
</style>
