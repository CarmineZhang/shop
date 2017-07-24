<template>
  <flexbox class='nav'>
    <flexbox-item>
      <a>
        <img src="http://simshop.repe.com.cn:9080/mall/resources/style/system/front/wap/images/bao.png" alt="">
        <span>
          分类
        </span>
      </a>
    </flexbox-item>
    <flexbox-item>
      <a>
        <img src="http://simshop.repe.com.cn:9080/mall/resources/style/system/front/wap/images/tou.png" alt="">
        <span>
          海外购
        </span>
      </a>
    </flexbox-item>
    <flexbox-item>
      <a>
        <img src="http://simshop.repe.com.cn:9080/mall/resources/style/system/front/wap/images/xi.png" alt="">
        <span>
          积分
        </span>
      </a>
    </flexbox-item>
    <flexbox-item>
      <a>
        <img src="http://simshop.repe.com.cn:9080/mall/resources/style/system/front/wap/images/tu.png" alt="">
        <span>
          回购
        </span>
      </a>
    </flexbox-item>
  </flexbox>
</template>
<script>
import { Flexbox, FlexboxItem } from '@/components/base/flexbox'
export default {
  name: 'nav',
  components: {
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 20px 12px;
  a {
    display: block;
    img {
      display: block;
      width: 36px;
      height: 36px;
      margin: 0 auto 5px;
    }
    span {
      display: block;
    }
  }
}
</style>
