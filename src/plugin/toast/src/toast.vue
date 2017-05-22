<template>
    <section class="toastBox" v-show="isShow">
      <div class="loader" :class="{active: isShow}">
        {{content}}
      </div>
    </section>
</template>
<script>
  export default {
    name: 'toast',
    props: ['isShow', 'content'],
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .toastBox
    position: absolute
    left: 0px
    right: 0px
    bottom: 0px
    top: 0px
    display: flex
    align-items: center
    justify-content: center
    z-index: 9999
    .loader
      background-color: rgba(0, 0, 0, 0.7)
      color: #fff
      height: 25px
      padding: 0 8px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 3px
      font-size: 12px
      opacity: 0
      animation: show 0.6s
      &.active
        opacity: 1
    @keyframes show
      0%
        opacity: 0
      100%
        opacity: 1

</style>
