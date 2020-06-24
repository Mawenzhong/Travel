<template>
<div>
    <banner></banner>
    <detailheader></detailheader>
    <div class="content"></div>
</div>
</template>
<script>
import banner from './components/banner'
import detailheader from './components/header'
export default {
  name: 'Detail',
  components: {
    banner,
    detailheader
  }
}
</script>
<style lang="stylus" scoped>
.content
  height:50rem
</style>
