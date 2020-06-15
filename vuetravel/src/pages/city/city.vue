<template>
<div>
<cityheader></cityheader>
<citysearch></citysearch>
</div>
</template>
<script>
import cityheader from './components/cityheader'
import citysearch from './components/search'
export default {
  name: 'city',
  components: {
    cityheader,
    citysearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
