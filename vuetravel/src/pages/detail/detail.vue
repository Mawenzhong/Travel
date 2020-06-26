<template>
<div>
    <banner></banner>
    <detailheader></detailheader>
    <div class="content">
      <detaillist :list="list"></detaillist>
    </div>
</div>
</template>
<script>
import banner from './components/banner'
import detailheader from './components/header'
import detaillist from './components/list'
export default {
  name: 'Detail',
  components: {
    banner,
    detailheader,
    detaillist
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [{
            title: '单张成人票'
          },
          {
            title: '两张成人票'
          }]
        },
        {
          title: '儿童票',
          children: [{
            title: '单张儿童票'
          },
          {
            title: '两张儿童票'
          }]
        },
        {
          title: '学生票',
          children: [{
            title: '单张学生票'
          },
          {
            title: '两张学生票'
          }]
        },
        {
          title: '特惠票',
          children: [{
            title: '单张特惠票'
          },
          {
            title: '两张特惠票'
          }]
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  height:50rem
</style>
