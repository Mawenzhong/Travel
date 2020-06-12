<template>
<div class="icons">
  <swiper ref="mySwiper" :options="swiperOptions">
     <swiper-slide v-for="(off,index) of get" :key="index">
    <div class="icon" v-for="item of off" :key="item.id">
        <div class="icon-img">
        <img class="icon-img-center" :src="item.imgUrl" alt="">
        </div>
        <p class="icon-p">{{item.desc}}</p>
    </div>
    </swiper-slide>
    </swiper>
</div>
</template>

<script>
export default{

  name: 'homeicons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    get () {
      const get = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!get[page]) {
          get[page] = []
        }
        get[page].push(item)
      })
      return get
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mix.styl'
.icons >>> swiper-container
  height:0
  padding-bottom:50%
.icons
  margin-top:.2rem
  width:100%
  height:0
  padding-bottom:50%
  overflow:hidden
.icon
  position:relative
  float:left
  width:25%
  padding-bottom:25%
.icon-img
  position:absolute
  top:0
  left:0
  right:0
  bottom:.44rem
  padding:.1rem
.icon-img-center
  display:block
  height:100%
  margin: 0 auto
.icon-p
  position:absolute
  left :0
  right:0
  bottom:0
  color:#333
  text-align:center
  line-height:.44rem5
  ell()

</style>
