<template>
  <div class="weui-cell" :class="{'weui-cell_access': link}" @click="onClick">
    <div class="weui-cell__bd">
      <p v-html="title"></p>
    </div>
    <div class="weui-cell__ft" v-html="content" :class="valueClass"></div>
  </div>
</template>
<script>
export default {
  name: 'cell',
  props: {
    title: String,
    content: String,
    link: Boolean,
    arrowDirection: String
  },
  computed: {
    valueClass() {
      return {
        've-cell-arrow-transition': !!this.arrowDirection,
        've-cell-arrow-up': this.arrowDirection === 'up',
        've-cell-arrow-down': this.arrowDirection === 'down'
      }
    }
  },
  methods: {
    onClick(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

