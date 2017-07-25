<template>
  <div class="weui-cell" :class="{'weui-cell_access': link}" @click="onClick">
    <div class="weui-cell__bd">
      <p v-html="title"></p>
    </div>
    <div class="weui-cell__ft" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: 'cell',
  props: {
    title: String,
    content: String,
    link: Boolean
  },
  methods: {
    onClick(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>

