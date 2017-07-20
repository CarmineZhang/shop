<template>
  <div class="ve-toast">
    <div class="weui-mask_transparent" v-show="show"></div>
    <transition :name="currentTransition">
      <div class="weui-toast" :class="toastClass" v-show="show">
        <i class="weui-icon-success-no-circle weui-icon_toast" v-show="type !== 'text'"></i>
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
  name: 've-toast',
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
    duration: {
      type: Number,
      default: 2000
    },
    transition: String,
    type: {
      type: String,
      default: 'text'
    },
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
      if (this.position === 'top') {
        return 've-slide-from-top'
      }
      if (this.position === 'bottom') {
        return 've-slide-from-bottom'
      }
      return 've-fade'
    },
    toastClass() {
      return {
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        've-toast-top': this.position === 'top',
        've-toast-bottom': this.position === 'bottom',
        've-toast-middle': this.position === 'middle'
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val)
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('on-hide')
        }, this.duration)
      }
    },
    value(val) {
      this.show = val
    }
  }
}
</script>

