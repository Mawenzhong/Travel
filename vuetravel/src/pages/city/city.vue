<template>
<div>
<cityheader></cityheader>
<citysearch></citysearch>
<citylist :cities="cities" :hot="hotCities" :list="letter"></citylist>
<cityalphabet :cities="cities" @change="hadnadd"></cityalphabet>
</div>
</template>
<script>
import cityheader from './components/cityheader'
import citysearch from './components/search'
import citylist from './components/citylist'
import cityalphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    cityheader,
    citysearch,
    citylist,
    cityalphabet
  },
  methods: {
    getcityadd () {
      axios.get('/api/city.json')
        .then(this.cityadd)
    },
    cityadd (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
      console.log(res)
    },
    hadnadd (e) {
      this.letter = e
    }
  },
  mounted () {
    this.getcityadd()
  }
}
</script>

<style lang="stylus" scoped>

</style>
