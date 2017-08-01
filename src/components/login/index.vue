<template>
  <div>
    <cell-box>
      <ve-input placeholder='请输入用户名/邮箱/已验证手机' v-model="username" :is-valid="!!this.$validator.$errors.username"></ve-input>
      <ve-input type="password" placeholder="请输入密码" v-model="pwd" :is-valid="!!this.$validator.$errors.pwd"></ve-input>
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入验证码" v-model="code">
        </div>
        <div class="weui-cell__ft">
          <img class="weui-vcode-img">
        </div>
      </div>
    </cell-box>
    <p class="page-action">
      <button class="ve-button ve-button-primary" @click="logon">登录</button>
      <a href="" class="link">免费注册</a>
    </p>
  </div>
</template>
<script>
import { CellBox } from '../base/cell'
import VeInput from '../base/input'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      pwd: '',
      code: ''
    }
  },
  validator: {
    username: { test: 'required', message: '用户名不能为空' },
    pwd: {
      test: /^[a-zA-Z0-9]{6,10}$/,
      message: '密码不符合要求'
    },
    code: {
      test: /^\d{6}$/,
      message: '验证码为6位数字'
    }
  },
  components: {
    CellBox,
    VeInput
  },
  computed: {
    errors() {
      return this.$validator.$errors;
    }
  },
  methods: {
    logon() {
      if (!this.$validator.check()) {
        var errors = []
        Object.keys(this.errors).forEach((field) => {
          errors.push(this.errors[field])
        });
        this.$ve.alert.show(errors.join('\n'))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-action {
  margin-top: 15px;
  padding: 0 15px;
  a {
    display: block;
    padding-top: 15px;
  }
}
</style>


