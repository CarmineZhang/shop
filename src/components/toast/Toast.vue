<template>
  <div class="vux-toast" v-show="show">
    <div class="weui-mask_transparent"></div>
    <transition :name="currentTransition">
      <div class="weui-toast" :style="{width: width}" :class="toastClass">
        <i class="weui-icon-success-no-circle weui-icon_toast" v-show="type !== 'text'"></i>
        <p class="weui-toast__content" v-if="text" :style="{
                                          padding: '10px'
                                        }" v-html="text"></p>
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
    transition: String,
    type: {
      type: String,
      default: 'text'
    },
    width: {
      type: String,
      default: '7.6em'
    },
    text: String,
    position: String
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
        'weui-loading': this.type === 'loadding',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        've-toast-top': this.position === 'top',
        've-toast-bottom': this.position === 'bottom',
        've-toast-middle': this.position === 'middle'
      }
    }
  },
} 
</script>

