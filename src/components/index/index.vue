<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <search-bar></search-bar>
    <swiper :list="swiperlist"></swiper>
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
  </div>
</template>

<script>
import SearchBar from '@/components/base/searchbar'
import Swiper from '@/components/base/swiper'
import { Flexbox, FlexboxItem } from '@/components/base/flexbox'
export default {
  name: 'index',
  components: {
    SearchBar,
    Swiper,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
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
