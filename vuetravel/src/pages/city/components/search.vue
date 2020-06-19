<template>
<div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-box" ref="search" v-show="keyword">
      <ul>
        <li class="search-item" v-for="item of list" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'citysearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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
.search-box
  width:100%
  z-index:1
  overflow:hidden
  position:absolute
  top:1.58rem
  right:0
  bottom:0
  background:#eee
.search-item
  line-height:.62rem
  padding-left:.2rem
  color:#666
</style>
