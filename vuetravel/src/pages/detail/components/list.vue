<template>
    <div class="list">
      <div class="item border-bottom" v-for="(item, index) of list" :key="index">
        <div class="item-title" @click="listclick(index)"><span class="iconfont item-title-add">&#xe6ce;</span>
        {{item.title}}</div>
        <div v-if="item.children">
          <detaillist :list="item.children" v-show="nowindex===index"></detaillist>
        </div>
        </div>
      </div>
</template>index
<script>
export default {
  name: 'detaillist',
  props: {
    list: Array
  },
  data () {
    return {
      nowindex: -1
    }
  },
  methods: {
    listclick (index) {
      if (this.nowindex < 0) {
        this.nowindex = index
      } else {
        this.nowindex = -1
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.item
  line-height:.8rem
  font-size:.32rem
  padding:0 .2rem
</style>
