<template>
  <div class="weui-toptips weui-toptips_warn" :class="[className]" v-show="show" v-html="content">
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

