<template>
  <picker v-model="show" :data="dateData" :depth="3" :default-value="defaultValue" @on-change="change">
  </picker>
</template>
<script>
import Picker from '@/components/base/picker'
export default {
  name: 'datepicker',
  data() {
    return {
      show: false,
      dateData: []
    }
  },
  components: {
    Picker
  },
  created() {
    this.dateData = this.getDate()
  },
  props: {
    value: Boolean,
    start: {
      type: Number,
      default: 1970
    },
    end: Number,
    defaultValue: Array
  },
  methods: {
    change(val) {
      this.$emit('on-change', val)
    },
    getDate() {
      var start = this.start,
        end = this.end
      var result = []
      for (var i = start; i <= end; i++) {
        let date = new Date(i, 0, 1)
        let year = date.getFullYear()
        var Y = {
          label: `${year}年`,
          value: year,
          children: []
        }
        for (let i = 0; i < 12; i++) {
          var M = {
            label: `${i + 1}月`,
            value: i + 1,
            children: []
          }
          var last = new Date(year, i + 1, 0).getDate()
          for (let j = 1; j <= last; j++) {
            M.children.push({
              label: `${j}日`,
              value: j
            })
          }
          Y.children.push(M)
        }
        result.push(Y)
      }
      return result
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  }
}
</script>

