<template>
    <div class="list">
        <li class="item"
        v-for="item of letters"
        :key="item"
        @click="handaddclick"
        @touchstart="handltouchstart"
        @touchmove="hadndlmove"
        @touchend="handlend"
        :ref="item"
        >{{item}}</li>
    </div>
</template>
<script>
export default {

  name: 'cityalphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchasadd: false,
      staryY: 0,
      timer: null
    }
  },
  updated () {
    this.staryY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handaddclick (e) {
      this.$emit('change', e.target.innerText)
    },
    handltouchstart () {
      this.touchasadd = true
    },
    hadndlmove (e) {
      if (this.touchasadd) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchy = e.touches[0].clientY - 5
          const index = Math.floor((touchy - this.staryY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 5)
      }
    },
    handlend () {
      this.touchasadd = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varbless.styl'
.list
  display:flex
  flex-direction:column
  justify-content:center
  position:absolute
  top:0
  right:0
  bottom:0
  width:.4rem
.item
  line-height:.4rem
  text-align:center
  color:$bgcolor
</style>
