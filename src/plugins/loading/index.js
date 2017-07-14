import LoadingComponent from '@/components/loading'
let $vm

const plugin = {
  install(Vue, options) {
    if (!$vm) {
      const Loading = Vue.extend(LoadingComponent)

      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    function loading(content, callback) {
      $vm.content = content
      $vm.$off('on-hide')

      $vm.$on('on-hide', () => {
        callback && callback()
      })
      $vm.show = true
      return {
        hide: () => {
          $vm.show = false
        }
      }
    }

    if (!Vue.$ve) {
      Vue.$ve = {
        loading: loading
      }
    } else {
      Vue.$ve.loading = loading
    }
    Vue.mixin({
      created: function () {
        this.$ve = Vue.$ve
      }
    })
  }
}

export default plugin
