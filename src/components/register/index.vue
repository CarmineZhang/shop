<template>
  <div>
    <cell-box>
      <ve-select title="会员单位" :select-data="members" placeholder='请选择' @on-select="showSelect"></ve-select>
      <ve-input placeholder='请输入真实姓名' title="真实姓名" v-model="username"></ve-input>
      <ve-input type="password" placeholder="至少输入6位数字或字母" title="登录密码" v-model="pwd"></ve-input>
      <ve-input type="password" placeholder="请再次输入您的密码" title="确认密码"></ve-input>
      <ve-input-code placeholder='请输入验证码' title='验证码'></ve-input-code>
      <ve-input placeholder='请输入手机号' title="手机号"></ve-input>
    </cell-box>
    <div class="page-action">
      <button class="ve-button ve-button-primary">注册</button>
      <div class="page-link">
        <span>已有账号？</span>
        <router-link to="/login" class="link">登录</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { CellBox } from '../base/cell'
import VeInput, { VeInputCode, VeSelect } from '../base/input'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      pwd: '',
      code: '',
      members: []
    }
  },
  created() {
    setTimeout(() => {
      this.members.push({
        label: '会员单位一',
        value: 0
      }, {
          label: '会员单位二',
          value: 1
        }, {
          label: '会员单位三',
          value: 2
        })
      console.log('members')
    }, 2000)
  },
  components: {
    CellBox,
    VeInput,
    VeInputCode,
    VeSelect
  },
  methods: {
    showSelect(value) {
      console.log(value)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-action {
  margin-top: 15px;
  padding: 0 15px;
  .page-link {
    padding-top: 15px;
    line-height: 1.5;
    span,
    a {
      display: inline-block;
    }
  }
}
</style>

