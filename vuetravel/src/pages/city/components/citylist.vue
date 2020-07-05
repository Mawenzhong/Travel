<template>
<div class="list" ref="wrapper">
    <div>
    <div class="list-add">
        <div class="title border-title">当前城市</div>
        <div class="title-list">
            <div class="button-list">
                <div class="button-add">{{this.currcity}}</div>
            </div>
        </div>
    </div>
    <div class="list-add">
        <div class="title border-title">热门城市</div>
        <div class="title-list">
            <div class="button-list" v-for="item of hot" :key="item.id" @click="listadd(item.name)">
                <div class="button-add">{{item.name}}</div>
            </div>
        </div>
    </div>
    <div class="list-add" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-title">{{key}}</div>
        <div class="item-list">
            <div class="item button-item" v-for="itemadd of item" :key="itemadd.id" @click="listadd(itemadd.name)">{{itemadd.name}}</div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {

  name: 'citylist',
  props: {
    hot: Array,
    cities: Object,
    list: String

  },
  computed: {
    ...mapState({
      currcity: 'city'
    })
  },
  methods: {
    listadd (city) {
      this.$store.dispatch('changecity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    list () {
      if (this.list) {
        const element = this.$refs[this.list][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.button-list
  &:before
    border-color:#ccc
  &:after
    border-color:#ccc
.button-item
  &:before
    border-color:#ccc
.list
  overflow:hidden
  position:absolute
  top:1.58rem
  left:0
  right:0
  bottom:0
.title
  line-height:.4rem
  background:#eee
  padding-left:.2rem
  color:#666
.border-title
  border-bottom:.01rem solid #ccc
.title-list
  overflow:hidden
  padding:.1rem .6rem .1rem .1rem
.button-list
 width:33.33%
 float:left
.button-add
  margin:.1rem
  text-align:center
  border:.02rem solid #ccc
  border-radius:.2rem
.item-list
.item
  line-height:.76rem
  color:#666
.button-item
  border-bottom:.01rem solid #ccc
</style>
