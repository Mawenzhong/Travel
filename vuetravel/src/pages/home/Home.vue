<template>
<div>
<homeheader :city="city"></homeheader>
<homeswiper :list="swiperimg"></homeswiper>
<homeicons :list="icons"></homeicons>
<homerecom :list="recom"></homerecom>
<homeweekend :list="weekend"></homeweekend>
</div>
</template>
<script>
import homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
import homerecom from './components/recom'
import homeweekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecom,
    homeweekend
  },
  data () {
    return {
      city: '',
      swiperimg: [],
      icons: [],
      recom: [],
      weekend: []
    }
  },
  mounted () {
    this.gethomell()
  },
  methods: {
    gethomell () {
      axios.get('/api/index.json')
        .then(this.gethomekk)
    },
    gethomekk (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperimg = res.data.swiperList
        this.icons = res.data.iconList
        this.recom = res.data.recommendList
        this.weekend = res.data.weekendList
        console.log(res)
      }
    }
  }
}
</script>
<style lang="">

</style>
