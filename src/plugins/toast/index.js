import ToastComponent from '@/components/toast'
import {
  mergeProps
} from '@/libs/merge'
let $vm

const plugin = {
  install(Vue) {
    if (!$vm) {
      const Toast = Vue.extend(ToastComponent)

      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const toast = {
      show(options = {}) {
        if (typeof options === 'object') {
          mergeProps($vm, options)
          $vm.$off('on-hide')

          $vm.$on('on-hide', () => {
            options && options.callback && options.callback()
          })
          $vm.show = true
        }
      }
    }

    const toastUtil = {
      toastMiddle(content, options = {}) {
        if (typeof options === 'number') {
          options = {
            duration: options
          }
        }
        if (typeof options === 'function') {
          options = {
            callback: options
          }
        }

        options = Object.assign({
          content: content
        }, options)
        toast.show(options)
      },
      toastTop(content, options = {}) {
        if (typeof options === 'number') {
          options = {
            duration: options
          }
        }
        if (typeof options === 'function') {
          options = {
            callback: options
          }
        }

        options = Object.assign({
          position: 'top',
          content: content
        }, options)
        toast.show(options)
      },
      toastBottom(content, options = {}) {
        if (typeof options === 'number') {
          options = {
            duration: options
          }
        }
        if (typeof options === 'function') {
          options = {
            callback: options
          }
        }

        options = Object.assign({
          content: content,
          position: 'bottom'
        }, options)
        toast.show(options)
      },
      toastSuccess(content, options = {}) {
        if (typeof options === 'number') {
          options = {
            duration: options
          }
        }
        if (typeof options === 'function') {
          options = {
            callback: options
          }
        }

        options = Object.assign({
          type: 'success',
          content: content
        }, options)
        toast.show(options)
      }
    }

    if (!Vue.$ve) {
      Vue.$ve = {
        toast: toastUtil
      }
    } else {
      Vue.$ve.toast = toastUtil
    }
    Vue.mixin({
      created: function () {
        this.$ve = Vue.$ve
      }
    })
  }
}

export default plugin
