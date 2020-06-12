<template>
<div class="Special">
<div class="home-holiday"><span class="home-span">更多优惠特价></span></div>
<div class="home-dujia">
<div class="dujia-body" v-for="item of list" :key="item.id">
<img class="dujia-img" :src="item.imgUrl" alt="">
<span class="dujia-span">{{item.title}}</span>
<p class="dujia-p">{{item.desc}}</p>
</div>
</div>
</div>
</template>

<script>
export default {

  name: 'homeweekend',
  props: {
    list: Array
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
