<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {

  name: 'citysearch'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varbless.styl'
.search
  height:.72rem
  background:$bgcolor
  padding:0 .1rem
.search-input
  box-sizing:border-box
  padding:0 .1rem
  height:.6rem
  width:100%
  text-align:center
</style>
