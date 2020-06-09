<template>
<div>
<homeheader></homeheader>
<homeswiper></homeswiper>
<homeicons></homeicons>
</div>
</template>
<script>
import homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicons
  }
}
</script>
<style lang="">

</style>
