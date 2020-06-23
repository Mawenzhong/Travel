<template>
<div>
<homeheader></homeheader>
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
import {mapState} from 'vuex'
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
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      listcity: '',
      swiperimg: [],
      icons: [],
      recom: [],
      weekend: []
    }
  },
  mounted () {
    this.listcity = this.city
    this.gethomell()
  },
  activated () {
    if (this.listcity !== this.city) {
      this.listcity = this.city
      this.gethomell()
    }
  },
  methods: {
    gethomell () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.gethomekk)
    },
    gethomekk (res) {
      res = res.data
      if (res.ret && res.data) {
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
