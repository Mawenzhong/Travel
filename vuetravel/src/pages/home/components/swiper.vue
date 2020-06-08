<template>
<swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of swiperlist" :key="item.id">
    <img class="swiper-img" :src="item.imgurl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</template>
<script>
export default {

  name: 'homeswiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 1200,
        autoplayDisableOnInteraction: false
      },
      swiperlist: [{
        id: '001',
        imgurl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      },
      {
        id: '002',
        imgurl: '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
      },
      {
        id: '003',
        imgurl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
 .swiper-img
  width:100%
</style>
