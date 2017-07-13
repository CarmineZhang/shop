import ConfirmComponent from '@/components/confirm'
import {
  mergeProps
} from '@/libs/merge'
let $vm

const plugin = {
  install(Vue, options) {
    if (!$vm) {
      const Confirm = Vue.extend(ConfirmComponent)
      $vm = new Confirm({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const confirm = {
      show(options = {}) {
        if (typeof options === 'object') {
          mergeProps($vm, options)
        } else if (typeof options === 'string') {
          $vm.title = ''
          $vm.content = options
        }
        $vm.$off('on-cancel')
        $vm.$off('on-confirm')

        $vm.$on('on-cancel', () => {
          options && options.onCancel && options.onCancel()
        })
        $vm.$on('on-confirm', () => {
          options && options.onConfirm && options.onConfirm()
        })
        $vm.showValue = true
      },
      hide() {
        $vm.showValue = false
      }
    }

    if (!Vue.$ve) {
      Vue.$ve = {
        confirm
      }
    } else {
      Vue.$ve.confirm = confirm
    }
    Vue.mixin({
      created: function() {
        this.$ve = Vue.$ve
      }
    })
  }
}

export default plugin
