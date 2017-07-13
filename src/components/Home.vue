<template>
  <div>
    <button @click="showAlert">测试alert</button>
    <button @click="showAlert1">测试alert1</button>
    <button @click="showConfirm">测试confirm</button>
    <alert v-model="show" title="提示">abcd</alert>
    <confirm v-model="confirmShow" title='提示' content='测试confirm' @on-confirm='confirm'></confirm>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import VeFooter from './Footer'
import Alert from './alert'
import Confirm from './confirm'
export default {
  name: 'home',
  components: {
    VeFooter,
    Alert,
    Confirm
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      confirmShow: false
    }
  },
  methods: {
    showAlert() {
      // this.show = true
      this.$ve.alert.show({ title: '提示', content: '数据测试！' })
    },
    showAlert1() {
      this.$ve.alert.show('cccccsss')
    },
    showConfirm() {
      // this.confirmShow = true
      this.$ve.confirm.show({
        title: 'confirm',
        content: '测试confirm',
        onConfirm: () => {
          this.confirm()
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },
    confirm() {
      console.log('ok')
    }
  }
}
</script>

<style lang='scss'>

</style>
