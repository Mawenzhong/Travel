<template>
<div class="icons">
  <swiper ref="mySwiper" :options="swiperOptions">
     <swiper-slide v-for="(off,index) of get" :key="index">
    <div class="icon" v-for="item of off" :key="item.id">
        <div class="icon-img">
        <img class="icon-img-center" :src="item.imgurl" alt="">
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
  data () {
    return {
      swiperOptions: {
        autoplay: false
      },
      iconslist: [{
        id: '001',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      },
      {
        id: '002',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      },
      {
        id: '003',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      },
      {
        id: '004',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      },
      {
        id: '005',
        imgurl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        desc: '海外酒店'
      },
      {
        id: '006',
        imgurl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        desc: '低价机票'
      },
      {
        id: '007',
        imgurl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        desc: '汽车票船票'
      },
      {
        id: '008',
        imgurl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      },
      {
        id: '009',
        imgurl: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
        desc: '民宿客栈'
      },
      {
        id: '010',
        imgurl: 'https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png',
        desc: '专车自驾'
      },
      {
        id: '011',
        imgurl: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png',
        desc: '赚钱·信用卡'
      },
      {
        id: '012',
        imgurl: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png',
        desc: '旅游团购'
      },
      {
        id: '013',
        imgurl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      },
      {
        id: '014',
        imgurl: 'https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png',
        desc: '特惠酒店'
      },
      {
        id: '015',
        imgurl: 'https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png',
        desc: '借钱'
      },
      {
        id: '016',
        imgurl: 'https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png',
        desc: '白金卡'
      }

      ]
    }
  },
  computed: {
    get () {
      const get = []
      this.iconslist.forEach((item, index) => {
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
