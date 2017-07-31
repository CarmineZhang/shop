<template>
  <div>
    <cell-box>
      <ve-input placeholder='请输入用户名/邮箱/已验证手机'></ve-input>
      <ve-input type="password" placeholder="请输入密码"></ve-input>
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入验证码">
        </div>
        <div class="weui-cell__ft">
          <img class="weui-vcode-img">
        </div>
      </div>
    </cell-box>
    <p class="page-action">
      <button class="ve-button ve-button-primary">登录</button>
      <a href="">免费注册</a>
    </p>
  </div>
</template>
<script>
import { CellBox } from '../base/cell'
import VeInput from '../base/input'
export default {
  name: 'login',
  components: {
    CellBox,
    VeInput
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


