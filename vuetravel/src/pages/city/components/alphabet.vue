<template>
    <div class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </div>
</template>
<script>
export default {

  name: 'cityalphabet'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varbless.styl'
.list
  display:flex
  flex-direction:column
  justify-content:center
  position:absolute
  top:0
  right:0
  bottom:0
  width:.4rem
.item
  line-height:.4rem
  text-align:center
  color:$bgcolor
</style>
