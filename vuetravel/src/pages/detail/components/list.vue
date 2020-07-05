<template>
    <div class="list">
      <div class="item border-bottom" v-for="(item, index) of list" :key="index" @click="listclick">
        <span class="iconfont item-title-add">&#xe6ce;</span>
        {{item.title}}
        <div v-if="item.children">
          <detaillist :list="item.children" v-show="condition"></detaillist>
        </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'detaillist',
  props: {
    list: Array
  },
  data () {
    return {
      condition: false
    }
  },
  methods: {
    listclick () {
      if (this.condition === false) {
        this.condition = true
      } else {
        this.condition = false
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
