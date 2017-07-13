import AlertComponent from '@/components/alert'
import {
  mergeProps
} from '@/libs/merge'
let $vm

const plugin = {
  install(Vue, options) {
    if (!$vm) {
      const Alert = Vue.extend(AlertComponent)
      $vm = new Alert({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const alert = {
      show(options = {}) {
        if (typeof options === 'object') {
          mergeProps($vm, options)
        } else if (typeof options === 'string') {
          $vm.content = options
        }
        this.unwatcher && this.unwatcher()
        this.unwatcher = $vm.$watch('showValue', (val) => {
          val && options.onShow && options.onShow($vm)
          if (!val && options.onHide) {
            options.onHide($vm)
            this.unwatcher && this.unwatcher()
            this.unwatcher = null
          }
        })
        $vm.showValue = true
      },
      hide() {
        $vm.showValue = false
      }
    }

    if (!Vue.$ve) {
      Vue.$ve = {
        alert
      }
    } else {
      Vue.$ve.alert = alert
    }
    Vue.mixin({
      created: function () {
        this.$ve = Vue.$ve
      }
    })
  }
}

export default plugin
