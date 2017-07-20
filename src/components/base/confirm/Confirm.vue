<template>
<div class="ve-confirm">
  <ve-dialog v-model="showValue">
    <div class="weui-dialog__hd">
      <strong class="weui-dialog__title">{{title}}</strong>
    </div>
    <div class="weui-dialog__bd">
      <slot>
        <div v-html="content"></div>
      </slot>
    </div>
    <div class="weui-dialog__ft">
      <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="_onCancel">{{cancelText }}</a>
      <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="_onConfirm">{{confirmText}}</a>
    </div>
  </ve-dialog>
</div>
</template>
<script>
import VeDialog from '../dialog'
export default {
  name: 've-confirm',
  components: {
    VeDialog
  },
  data() {
    return {
      showValue: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  watch: {
    value(val) {
      this.showValue = val
    },
    showValue(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    _onConfirm() {
      this.showValue = false
      this.$emit('on-confirm')
    },
    _onCancel() {
      this.showValue = false
      this.$emit('on-cancel')
    }
  }
}
</script>
