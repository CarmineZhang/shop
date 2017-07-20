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
  
    <button class="ve-button ve-button-primary" @click="picker">picker</button>
  
    <button class="ve-button ve-button-primary" @click="newPicker">newPicker</button>
  
    <alert v-model="show" title="提示">abcd</alert>
    <confirm v-model="confirmShow" title='提示' content='测试confirm' @on-confirm='confirm'></confirm>
    <toast :duration="1000" content='上传成功' type='success' v-model="toastshow" @on-hide="hidetoast"></toast>
    <action-sheet v-model="actionShow" :menus="menus" @on-click-menu="clickMenu"></action-sheet>
    <picker v-model="pickerShow" :data="pickerData" :depth="depth" :default-value="[0,2]"></picker>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import VeFooter from './Footer'
import Alert from './base/alert'
import Confirm from './base/confirm'
import Toast from './base/toast'
import ActionSheet from './base/actionsheet'
import Picker from './base/picker'
export default {
  name: 'home',
  components: {
    VeFooter,
    Alert,
    Confirm,
    Toast,
    ActionSheet,
    Picker
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false,
      depth: 2,
      confirmShow: false,
      toastshow: false,
      actionShow: false,
      pickerShow: false,
      pickerData: [
        {
          label: '飞机票',
          value: 0,
          children: [
            {
              label: '经济舱',
              value: 1
            },
            {
              label: '商务舱',
              value: 2
            }
          ]
        },
        {
          label: '火车票',
          value: 1,
          children: [
            {
              label: '卧铺',
              value: 1,
              disabled: true // 不可用
            },
            {
              label: '坐票',
              value: 2
            },
            {
              label: '站票',
              value: 3
            }
          ]
        },
        {
          label: '汽车票',
          value: 3,
          children: [
            {
              label: '快班',
              value: 1
            },
            {
              label: '普通',
              value: 2
            }
          ]
        }
      ],
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
    },
    picker() {
      this.pickerShow = true
    },
    newPicker() {
      this.pickerData = [
        {
          label: '飞机票',
          value: 0,
          disabled: true // 不可用
        },
        {
          label: '火车票',
          value: 1
        },
        {
          label: '汽车票',
          value: 3
        },
        {
          label: '公车票',
          value: 4,
        }
      ]
      this.depth = 1
      this.pickerShow = true
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
