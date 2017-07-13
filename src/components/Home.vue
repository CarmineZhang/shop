<template>
  <div>
    <button @click="showAlert">测试alert</button>
    <alert v-model="show" title="提示">abcd</alert>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import VeFooter from './Footer'
import Alert from './alert'
export default {
  name: 'home',
  components: {
    VeFooter,
    Alert
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  },
  methods: {
    showAlert() {
      // this.show = true
      this.$ve.alert.show({ title: '提示', content: '数据测试！' })
    }
  }
}
</script>

<style lang='scss'>

</style>
