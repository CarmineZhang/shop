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

.ve-pop-out-enter-active,
.ve-pop-out-leave-active,
.ve-pop-in-enter-active,
.ve-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.ve-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.ve-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.ve-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.ve-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

