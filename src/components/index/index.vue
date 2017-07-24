<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo.png" alt="">
    </div>
    <search-bar></search-bar>
    <swiper :list="swiperlist"></swiper>
    <ve-nav></ve-nav>
    <recommend></recommend>
  </div>
</template>

<script>
import SearchBar from '@/components/base/searchbar'
import Swiper from '@/components/base/swiper'
import VeNav from './nav'
import Recommend from './recommend'
export default {
  name: 'index',
  components: {
    SearchBar,
    Swiper,
    VeNav,
    Recommend
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
