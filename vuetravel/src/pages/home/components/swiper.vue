<template>
<swiper ref="mySwiper" :options="swiperOptions" v-if="showswpier">
    <swiper-slide v-for="item of list" :key="item.id">
    <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>
<script>
export default {

  name: 'homeswiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        speed: 1200,
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showswpier () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
 .swiper-img
  width:100%
</style>
