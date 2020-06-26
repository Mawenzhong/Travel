<template>
    <div>
        <router-link tag="div" to="/" class="header-add" v-show="showabs">
        <div class="iconfont header-left">&#xe624;</div>
        </router-link>
        <div class="header-akk" v-show="!showabs" :style="opacitystyle">
        <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
        </router-link>
        特惠度假
        </div>
    </div>
</template>
<script>
export default {
  name: 'detailheader',
  data () {
    return {
      showabs: true,
      opacitystyle: {
        opacity: 0
      }
    }
  },
  methods: {
    haederbtn () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        this.opacity = opacity > 1 ? 1 : opacity
        this.opacitystyle = {
          opacity
        }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.haederbtn)
  },
  deactivated () {
    window.removeEventListener('scroll', this.haederbtn)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varbless.styl'
.header-add
  position:absolute
  left:.2rem
  top:.2rem
  width:.8rem
  height:.8rem
  border-radius:.4rem
  background:rgba(0,0,0,.8)
.header-left
  text-align:center
  color:#fff
  font-size:.4rem
  line-height:.8rem
.header-akk
  z-index:99
  position:fixed
  top:0
  left:0
  right:0
  height:.86rem
  line-height:.86rem
  background:$bgcolor
  text-align:center
  color:#fff
.header-back
  position:absolute
  left:0
  top:0
  width:.64rem
  font-size:.4rem
  color:#fff
</style>
