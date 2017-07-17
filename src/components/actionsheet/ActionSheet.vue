<template>
  <div class="ve-actionsheet">
    <transition name="ve-actionsheet-mask">
      <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="show"></div>
    </transition>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': show}">
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-for="(text, key) in menus" :key="key" @click="onMenuClick(text, key)" v-html="(text.label || text)">
        </div>
      </div>
      <div class="weui-actionsheet__action" @click="emitEvent('on-click-menu', 'cancel')" v-if="showCancel">
        <div class="weui-actionsheet__cell">{{cancelText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 've-actionsheet',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    menus: {
      type: Object,
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    onMenuClick(text, key) {
      this.emitEvent('on-click-menu', key)
    },
    onClickingMask() {
      this.$emit('on-click-mask')
      this.closeOnClickingMask && (this.show = false)
    },
    emitEvent(event, menu) {
      if (event === 'on-click-menu') {
        this.$emit(event, menu)
        this.$emit(`${event}-${menu}`)
        this.show = false
      }
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  }
}
</script>
