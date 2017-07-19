<template>
  <div>
    <div class="weui-mask"></div>
    <div class="weui-picker">
      <div class="weui-picker__hd">
        <a href="javascript:;" data-action="cancel" class="weui-picker__action">取消</a>
        <a href="javascript:;" data-action="select" class="weui-picker__action" id="weui-picker-confirm">确定</a>
      </div>
      <div class="weui-picker__bd">
        <div class="weui-picker__group">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'picker',

}
</script>

