<template>
  <div class="weui-toptips weui-toptips_warn" v-show="show" v-html="content">
  </div>
</template>
<script>
export default {
  name: 've-toptip',
  props: {
    className: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    },
    content: String
  },
  data() {
    return {
      show: false
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('on-hide')
        }, this.duration)
      }
    }
  }
}
</script>
<style scoped>
.weui-toptips {
  display: block;
}
</style>


