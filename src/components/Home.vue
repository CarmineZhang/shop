<template>
  <div class="main">
    <button class="ve-button ve-button-default" @click="showAlert">测试alert</button>
    <button class="ve-button ve-button-primary" @click="showAlert1">测试alert1</button>
    <button class="ve-button ve-button-warn" @click="showConfirm">测试confirm</button>
  
    <button class="ve-button ve-button-default" @click="toastTop">toastTop</button>
    <button class="ve-button ve-button-primary" @click="toastBottom">toastBottom</button>
    <button class="ve-button ve-button-warn" @click="toastSuccess">toastSuccess</button>
  
    <button class="ve-button ve-button-primary" @click="loading">loading</button>
  
    <button class="ve-button ve-button-primary" @click="actionSheet">actionsheet</button>
  
    <alert v-model="show" title="提示">abcd</alert>
    <confirm v-model="confirmShow" title='提示' content='测试confirm' @on-confirm='confirm'></confirm>
    <toast :duration="1000" content='上传成功' type='success' v-model="toastshow" @on-hide="hidetoast"></toast>
    <action-sheet v-model="actionShow" :menus="menus" @on-click-menu="clickMenu"></action-sheet>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import VeFooter from './Footer'
import Alert from './alert'
import Confirm from './confirm'
import Toast from './toast'
import ActionSheet from './actionsheet'
export default {
  name: 'home',
  components: {
    VeFooter,
    Alert,
    Confirm,
    Toast,
    ActionSheet
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      confirmShow: false,
      toastshow: false,
      actionShow: false,
      menus: {
        photo: '拍照',
        select: '从相册选择'
      }
    }
  },
  methods: {
    toastTop() {
      this.$ve.toast.toastTop('hello world', 1000)
    },
    toastBottom() {
      this.$ve.toast.toastBottom('hello worldhello worldhello world')
    },
    toastSuccess() {
      // this.$ve.toast.toastSuccess('注册成功', () => {
      //   console.log('注册成功')
      // })
      this.toastshow = true
    },
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
    },
    hidetoast() {
      console.log('上传成功')
    },
    loading() {
      var loading = this.$ve.loading('数据加载中', () => {
        this.confirm()
      })

      setTimeout(function () {
        loading.hide()
      }, 2000)
    },
    actionSheet() {
      this.actionShow = true
    },
    clickMenu(key) {
      console.log(key)
    }
  }
}
</script>

<style lang='scss'>
.main {
  margin: 10px;
}

button {
  margin-top: 10px;
}
</style>
