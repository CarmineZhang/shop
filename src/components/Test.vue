<template>
  <div class="main">
    <div>
      <swiper :list="swiperlist"></swiper>
      <button class="ve-button ve-button-default" @click="showAlert">测试alert</button>
      <button class="ve-button ve-button-primary" @click="showAlert1">测试alert1</button>
      <button class="ve-button ve-button-warn" @click="showConfirm">测试confirm</button>
  
      <button class="ve-button ve-button-default" @click="toastTop">toastTop</button>
      <button class="ve-button ve-button-primary" @click="toastBottom">toastBottom</button>
      <button class="ve-button ve-button-warn" @click="toastSuccess">toastSuccess</button>
  
      <button class="ve-button ve-button-primary" @click="loading">loading</button>
  
      <button class="ve-button ve-button-primary" @click="actionSheet">actionsheet</button>
  
      <button class="ve-button ve-button-primary" @click="picker">picker</button>
      <button class="ve-button ve-button-primary" @click="datepicker">datepicker</button>
      <button class="ve-button ve-button-primary" @click="toptip">toptip</button>
      <button class="ve-button ve-button-primary" @click="address">address</button>
      <search-bar @on-change="searchBar"></search-bar>
  
      <cell-box>
        <cell title="接收通知" content="已开启"></cell>
        <cell title="标题一" :link="true"></cell>
      </cell-box>
      <ve-address v-model="addressShow" @on-change="addressChange"></ve-address>
      <alert v-model="show" title="提示">abcd</alert>
      <confirm v-model="confirmShow" title='提示' content='测试confirm' @on-confirm='confirm'></confirm>
      <toast :duration="1000" content='上传成功' type='success' v-model="toastshow" @on-hide="hidetoast"></toast>
      <action-sheet v-model="actionShow" :menus="menus" @on-click-menu="clickMenu"></action-sheet>
      <picker v-model="pickerShow" :data="pickerData" :depth="depth" :default-value="[0,2]"></picker>
      <datepicker v-model="datepickerShow" :start="2000" :end="2050" :default-value="dateNow" @on-change="datePickerChange"></datepicker>
    </div>
    <!-- <ve-footer></ve-footer> -->
  </div>
</template>

<script>
import VeFooter from './footer'
import Alert from './base/alert'
import Confirm from './base/confirm'
import Toast from './base/toast'
import ActionSheet from './base/actionsheet'
import Picker from './base/picker'
import SearchBar from './base/searchbar'
import Swiper from './base/swiper'
import Datepicker from './base/datepicker'
import VeAddress from './base/address'
import { Cell, CellBox } from './base/cell'
export default {
  name: 'home',
  components: {
    VeFooter,
    Alert,
    Confirm,
    Toast,
    ActionSheet,
    Picker,
    SearchBar,
    Swiper,
    Datepicker,
    VeAddress,
    Cell,
    CellBox
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
      datepickerShow: false,
      addressShow: false,
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
      },
      swiperlist: [{
        href: '',
        img: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5695/103/7555664231/112188/7f5a47e7/5971decfN3c8d772f.jpg!q70.jpg'
      }, {
        href: '',
        img: 'https://img1.360buyimg.com/da/jfs/t6121/221/6082109939/93242/8d73b35f/597072a5Nfb136ad8.jpg'
      }, {
        href: '',
        img: 'https://img1.360buyimg.com/da/jfs/t5644/127/7616359806/97652/a99edb5f/59720fc4Nb1723554.jpg'
      }]
    }
  },
  computed: {
    dateNow() {
      var d = new Date()
      return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
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
    searchBar(val) {
      console.log(val)
    },
    toptip() {
      this.$ve.toptip('测试toptip')
    },
    datepicker() {
      this.datepickerShow = true
    },
    datePickerChange(val) {
      console.log(val)
    },
    address() {
      this.addressShow = true
    },
    addressChange(result) {
      console.log(result)
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
