<template>
  <div v-show="show">
    <div class="weui-mask"></div>
    <div class="weui-picker weui-animate-slide-up">
      <div class="weui-picker__hd">
        <a href="javascript:;" data-action="cancel" class="weui-picker__action" @click="cancel">取消</a>
        <a href="javascript:;" data-action="select" class="weui-picker__action" @click="confirm">确定</a>
      </div>
      <div class="weui-picker__bd">
        <div class="weui-picker__group" v-for="index in depth" :key="index" :id="`ve-picker-${uuid}-${index}`">
          <div class="weui-picker__mask"></div>
          <div class="weui-picker__indicator"></div>
          <div class="weui-picker__content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import scroll from './scroll'
import Result from './result'
export default {
  name: 'picker',
  props: {
    value: Boolean,
    data: Array,
    defaultValue: Array,
    depth: {
      type: Number,
      default: 1
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8)
    this.$nextTick(() => {
      this.render(this.data, 0)
    })
  },
  data() {
    return {
      uuid: '',
      lineTemp: [],
      result: [],
      show: false
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.show = val
    }
  },
  methods: {
    getId(i) {
      return `#ve-picker-${this.uuid}-${i}`
    },
    cancel() {
      this.show = false
    },
    confirm() {
      this.$emit('on-confirm', this.result)
      this.show = false
    },
    render(items, level) {
      var _this = this
      if (this.lineTemp[level] === undefined && this.defaultValue && this.defaultValue[level] !== undefined) {
        // 没有缓存选项，而且存在defaultValue
        const defaultVal = this.defaultValue[level];
        let index = 0, len = items.length;

        if (typeof items[index] == 'object') {
          for (; index < len; ++index) {
            if (defaultVal == items[index].value) break;
          }
        } else {
          for (; index < len; ++index) {
            if (defaultVal == items[index]) break;
          }
        }
        if (index < len) {
          this.lineTemp[level] = index;
        } else {
          console.warn('Picker has not match defaultValue: ' + defaultVal)
        }
      }

      if (!items || !items.length) {
        return
      }
      scroll({
        id: _this.getId(level + 1),
        items: items,
        temp: this.lineTemp[level],
        onChange: function (item, index) {
          //为当前的result赋值。
          if (item) {
            _this.result[level] = new Result(item);
          } else {
            _this.result[level] = null
          }
          _this.lineTemp[level] = index
          if (item.children && item.children.length > 0) {
            _this.render(item.children, level + 1)
          } else {
            _this.result.splice(level + 1);
            _this.$emit('on-change', _this.result);
          }

        }
      })

    }
  }
}
</script>

