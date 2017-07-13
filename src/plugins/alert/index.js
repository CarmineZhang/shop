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
        this.watcher && this.watcher()
        this.watcher = $vm.$watch('showValue', (val) => {
          val && options.onShow && options.onShow($vm)
          if (val === false && options.onHide) {
            options.onHide($vm)
            this.watcher && this.watcher()
          }
        })
        $vm.showValue = true
      },
      hide() {
        $vm.showValue = false
        this.watcher && this.watcher()
        this.watcher = null
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
