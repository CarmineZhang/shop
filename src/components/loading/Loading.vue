<template>
  <div class="ve-toast">
    <div class="weui-mask_transparent" v-show="show"></div>
    <transition :name="currentTransition">
      <div class="weui-toast weui-toast_loading ve-toast-middle" v-show="show">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content" v-if="content" v-html="content"></p>
        <p class="weui-toast__content" v-else>
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 've-loading',
  data() {
    return {
      show: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transition: String,
    content: String,
    position: {
      type: String,
      default: 'middle'
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition
      }
      return 've-fade'
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val)
      if (!val) {
        this.$emit('on-hide')
      }
    },
    value(val) {
      this.show = val
    }
  }
}
</script>

