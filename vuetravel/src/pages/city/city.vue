<template>
<div>
<cityheader></cityheader>
<citysearch></citysearch>
<citylist></citylist>
<cityalphabet></cityalphabet>
</div>
</template>
<script>
import cityheader from './components/cityheader'
import citysearch from './components/search'
import citylist from './components/citylist'
import cityalphabet from './components/alphabet'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch,
    citylist,
    cityalphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
