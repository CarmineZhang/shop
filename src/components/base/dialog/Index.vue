<template>
  <div class="ve-dialog">
    <transition :name="maskTransition">
      <div class="weui-mask" v-show="isShow"></div>
    </transition>
    <transition :name="dialogTransition">
      <div :class="dialogClass" v-show="isShow">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 've-dialog',
  data() {
    return {
      isShow: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 've-mask'
    },
    dialogTransition: {
      type: String,
      default: 've-dialog'
    },
    dialogClass: {
      type: String,
      default: 'weui-dialog'
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.isShow = val
      },
      immediate: true
    },
    isShow(val) {
      this.$emit(val ? 'on-show' : 'on-hide')
      this.$emit('input', val)
    }
  }
}
</script>
