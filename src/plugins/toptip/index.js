import TopTipComponent from '@/components/base/toptips'
import {
  mergeProps
} from '@/libs/merge'
let $vm

const plugin = {
  install(Vue) {
    if (!$vm) {
      const TopTip = Vue.extend(TopTipComponent)

      $vm = new TopTip({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    function toptip(content, options = {}) {
      if (typeof options === 'number') {
        options = {
          duration: options
        };
      }
      if (typeof options === 'function') {
        options = {
          callback: options
        };
      }

      if (typeof options === 'object') {
        mergeProps($vm, options)
      }
      $vm.$off('on-hide')

      $vm.$on('on-hide', () => {
        options && options.callback && options.callback()
      })
      $vm.show = true
    }

    if (!Vue.$ve) {
      Vue.$ve = {
        toptip: toptip
      }
    } else {
      Vue.$ve.toptip = toptip
    }
    Vue.mixin({
      created: function () {
        this.$ve = Vue.$ve
      }
    })
  }
}

export default plugin
