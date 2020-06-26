<template>
    <div class="list">
      <div class="item border-bottom" v-for="(item, index) of list" :key="index">
        <span class="iconfont item-title-add">&#xe6ce;</span>
        {{item.title}}
        <div v-if="item.children">
          <detaillist :list="item.children"></detaillist>
        </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'detaillist',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.item
  line-height:.8rem
  font-size:.32rem
  padding:0 .2rem
</style>
