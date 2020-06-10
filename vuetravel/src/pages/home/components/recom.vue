<template>
<div class="Special">
<div class="home-holiday"><span class="home-span">特惠度假</span></div>
<div class="home-dujia">
<div class="dujia-body" v-for="item of recomm" :key="item.id">
<img class="dujia-img" :src="item.imgurl" alt="">
<span class="dujia-span">{{item.title}}</span>
<p class="dujia-p">{{item.desc}}</p>
</div>
</div>
</div>
</template>

<script>
export default {

  name: 'homerecom',
  data () {
    return {
      recomm: [{
        id: '001',
        imgurl: '//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
        title: '含往返飞机票(含税)+5晚住宿',
        desc: '¥4224'}, {
        id: '002',
        imgurl: '//imgs.qunarzz.com/sight/p0/1504/37/37bc07abdd1fdbee.water.jpg_256x160_061797a3.jpg',
        title: '含往返飞机票(含税)+4晚住宿',
        desc: '¥5899'}, {
        id: '003',
        imgurl: '//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
        title: '含往返飞机票(含税)+4晚住宿',
        desc: '¥2580'}, {
        id: '004',
        imgurl: '//imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg',
        title: '含往返飞机票+7晚住宿',
        desc: '¥8999'}

      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mix.styl'
.Special
  margin-top:.2rem
  height:6.28rem
.home-holiday
  line-height:.5rem
  background:#eee
  padding-left:.4rem
.home-dujia
  display:flex
  flex-wrap:wrap
  justify-content:center
  justify-content: space-around
  height:6.28rem
.dujia-body
  float:left
  height:2.65rem
  width:3.47rem
  margin-top:.25rem
.dujia-img
  border-radius:.25rem
  height:80%
  width:100%
.dujia-span
  display:block
  width:100%
  font-size:.27rem
  text-align:center
  ell()
.dujia-p
  display:block
  width:100%
  font-size:.30rem
  text-align:center
  color:#ff7400
</style>
