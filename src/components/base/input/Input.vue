<template>
  <div class="weui-cell">
    <div class="weui-cell__hd">
      <label class="weui-label" v-text="title"></label>
    </div>
    <div class="weui-cell__bd">
      <input v-if="type === 'text'" class="weui-input" v-model="currentValue" type="text" :placeholder="placeholder" :readonly="readonly">
      <input v-if="type === 'password'" class="weui-input" v-model="currentValue" type="password" :placeholder="placeholder" :readonly="readonly">
      <input v-if="type === 'number'" class="weui-input" v-model="currentValue" type="tel" :placeholder="placeholder" :readonly="readonly">
    </div>
  </div>
</template>
<script>
export default {
  name: 've-input',
  created() {
    this.currentValue = (this.value === undefined || this.value === null) ? '' : this.value
  },
  props: {
    type: {
      type: String,
      defult: 'text'
    },
    placeholder: String,
    readonly: Boolean,
    value: [String, Number],
  },
  data() {
    return {
      currentValue: ''
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

