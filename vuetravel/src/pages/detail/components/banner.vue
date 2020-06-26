<template>
<div>
<div class="banner" @click="bannerclick">
    <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_640x420x95_49f76129.jpg" alt="">
    <div class="banner-inf">
        <div class="banner-add">泰国</div>
        <div class="banner-akk">1/5<span class="iconfont banner-icon">&#xe6c6;</span></div>
    </div>
</div>
<commongall :img="img" v-show="showgall" @change="changeadd"></commongall>
</div>
</template>
<script>
import commongall from '@/common/gallary/gallary'
export default {
  name: 'banner',
  data () {
    return {
      showgall: false,
      img: ['https://img1.qunarzz.com/vs_ceph_vs_tts/b2c33082-d525-4a3b-88c1-1b592b1f8632.jpg_r_640x420x95_49f76129.jpg', 'https://img1.qunarzz.com/vs_ceph_vs_tts/069d147e-27e1-442b-95e5-43d79d05077f.jpg_r_640x420x95_d043c570.jpg']
    }
  },
  methods: {
    bannerclick () {
      this.showgall = true
    },
    changeadd () {
      this.showgall = false
    }
  },
  components: {
    commongall
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position:relative
  height:0
  padding-bottom:66.5%
.banner-img
  width:100%
.banner-inf
  display:flex
  position:absolute
  top:4.5rem
  left:0
  right:0
  bottom:0
  line-height:.4rem
  color:#fff
.banner-add
  flex:1
  font-size:.32rem
  padding:0 .2rem
.banner-akk
  padding:0 .4rem
  line-height:.4rem
  border-radius:.3rem
.banner-icon
  font-size:.3rem
</style>
