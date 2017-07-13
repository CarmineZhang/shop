<template>
  <div class="ve-alert">
    <ve-dialog v-model="showValue" @on-show="$emit('on-show')" @on-hide="$emit('on-hide')">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">{{title}}</strong>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="hide">{{buttonText}}</a>
      </div>
    </ve-dialog>
  </div>
</template>
<script>
import VeDialog from '../dialog'

export default {
  name: 've-alert',
  components: {
    VeDialog
  },
  created() {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  props: {
    value: Boolean,
    title: String,
    content: String,
    buttonText: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      showValue: false
    }
  },
  methods: {
    hide() {
      this.showValue = false
    }
  },
  watch: {
    value(val) {
      console.log('123')
      this.showValue = val
    },
    showValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>
