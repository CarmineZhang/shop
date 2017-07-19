<template>
  <div>
    <div class="weui-mask"></div>
    <div class="weui-picker">
      <div class="weui-picker__hd">
        <a href="javascript:;" data-action="cancel" class="weui-picker__action">取消</a>
        <a href="javascript:;" data-action="select" class="weui-picker__action" id="weui-picker-confirm">确定</a>
      </div>
      <div class="weui-picker__bd">
        <div class="weui-picker__group" v-for="index in depth" :key="index" :id="`ve-picker-${uuid}-${index}`">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'picker',
  props: {
    data: Array,
    depth: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8)
    this.render()
  },
  data() {
    return {
      uuid: ''
    }
  },
  methods: {
    getId(i) {
      return `#ve-picker-${this.uuid}-${i}`
    },
    render() {
      if (!data || !data.length) {
        return
      }
      for (let i = 0; i < depth; i++) {
        if (!document.querySelector(_this.getId(i))) {
          return
        }
        this.scroller[i] && this.scroller[i].destroy()
      }
    }
  }
}
</script>

