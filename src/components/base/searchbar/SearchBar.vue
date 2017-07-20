<template>
  <div class="weui-search-bar" id="searchBar" :class="{'weui-search-bar_focusing':isFocus}">
    <form class="weui-search-bar__form">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" v-model="searchValue" class="weui-search-bar__input" v-focus="isFocus" placeholder="搜索" required="" @blur="inputBlur">
        <a href="javascript:" class="weui-icon-clear" @click="clear"></a>
      </div>
      <label class="weui-search-bar__label" @click="labelClick">
        <i class="weui-icon-search"></i>
        <span>搜索</span>
      </label>
    </form>
    <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancel">取消</a>
  </div>
</template>
<script>
export default {
  name: 've-searchbar',
  data() {
    return {
      isFocus: false,
      searchValue: ''
    }
  },
  methods: {
    labelClick() {
      this.isFocus = true
    },
    inputBlur() {
      this.isFocus = false
      if (this.searchValue.length) {
        this.$emit('on-change', this.searchValue)
      }
    },
    cancel() {
      this.searchValue = ''
      this.isFocus = false
    },
    clear() {
      this.searchValue = ''
      this.isFocus = true
    }
  }
}
</script>

