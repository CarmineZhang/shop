<template>
  <div class="main">
    <transition name="ve-pop-in">
      <router-view class="router-view"></router-view>
    </transition>
    <ve-footer></ve-footer>
  </div>
</template>

<script>
import VeFooter from '../footer'
export default {
  name: 'home',
  components: {
    VeFooter
  },
  data() {
    return {}
  }
}
</script> 
<style>
.router-view {
  width: 100%;
  padding-bottom: 50px;
}
</style>

