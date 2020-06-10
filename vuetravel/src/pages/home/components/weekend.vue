<template>
<div class="Special">
<div class="home-holiday"><span class="home-span">更多优惠特价></span></div>
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

  name: 'homeweekend',
  data () {
    return {
      recomm: [{
        id: '001',
        imgurl: '//img1.qunarzz.com/sight/p0/2006/c0/c08a1c90286ac75a3.water.jpg_256x160_caa36125.jpg',
        title: '长隆水上乐园',
        desc: '¥59'}, {
        id: '002',
        imgurl: '//img1.qunarzz.com/sight/p0/2006/70/705f77e802bf6a92a3.water.jpg_256x160_07152ad2.jpg',
        title: '长隆野生动物世界',
        desc: '¥174'}, {
        id: '003',
        imgurl: '//img1.qunarzz.com/sight/p0/2005/6c/6cb1267f47db2083a3.img.jpg_256x160_f75c36a8.jpg',
        title: '珠海长隆海洋王国',
        desc: '¥225'}, {
        id: '004',
        imgurl: '//img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_256x160_600b2e6f.jpg',
        title: '岭南印象园',
        desc: '¥53'}

      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mix.styl'
.Special
  margin-top:.7rem
  height:6.28rem
.home-holiday
  display:block
  position:relative
  width:6.42rem
  background:#fff
  text-align:center
  line-height:.8rem
  margin:0 auto
  border:0.02rem solid #00d0d4
.home-span
  width:100%
  height:100%
  display:block
  color:#00d0d4
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
