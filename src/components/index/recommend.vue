<template>
  <div>
    <h3 class="header">
      精品推荐
    </h3>
    <flexbox class="ve-recommend">
      <flexbox-item class="ve-recommend-item">
        <a href="">
          <img src="http://simshop.repe.com.cn:9080/mall/upload/store/7/2017/06/09/6d23d594-d094-4528-8d23-71b134d41f99.png_small.png" alt="">
          <span>稀土氧化镝</span>
        </a>
      </flexbox-item>
      <flexbox-item class="ve-recommend-item">
        <a href="">
          <img src="http://simshop.repe.com.cn:9080/mall/upload/store/7/2017/06/09/6d23d594-d094-4528-8d23-71b134d41f99.png_small.png" alt="">
          <span>稀土氧化镝</span>
        </a>
      </flexbox-item>
      <flexbox-item class="ve-recommend-item">
        <a href="">
          <img src="http://simshop.repe.com.cn:9080/mall/upload/store/7/2017/06/09/6d23d594-d094-4528-8d23-71b134d41f99.png_small.png" alt="">
          <span>稀土氧化镝</span>
        </a>
      </flexbox-item>
      <flexbox-item class="ve-recommend-item">
        <a href="">
          <img src="http://simshop.repe.com.cn:9080/mall/upload/store/7/2017/06/09/6d23d594-d094-4528-8d23-71b134d41f99.png_small.png" alt="">
          <span>稀土氧化镝</span>
        </a>
      </flexbox-item>
    </flexbox>
  </div>
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
.header {
  margin-left: 30px;
  padding: 5px 0 10px;
  font-size: 18px;
}

.ve-recommend {
  padding: 0 10px;
  flex-wrap: wrap;
}

.ve-recommend-item {
  a {
    display: block;
    img {
      display: block;
      width: 160px;
      height: 106px;
      margin: 0 auto;
    }
    span {
      display: block;
    }
  }
}
</style>

