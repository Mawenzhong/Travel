<template>
<div>
<homeheader></homeheader>
<homeswiper></homeswiper>
<homeicons></homeicons>
<homerecom></homerecom>
<homeweekend></homeweekend>
</div>
</template>
<script>
import homeheader from './components/header'
import homeswiper from './components/swiper'
import homeicons from './components/icons'
import homerecom from './components/recom'
import homeweekend from './components/weekend'
export default {
  name: 'home',
  components: {
    homeheader,
    homeswiper,
    homeicons,
    homerecom,
    homeweekend
  }
}
</script>
<style lang="">

</style>
