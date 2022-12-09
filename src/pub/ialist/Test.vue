<template>
  <div class="q-pa-md">
    <q-btn color="purple" @click="showLoading" label="Show Loading" />
  </div>
</template>

<script>
import { Loading } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
  setup() {

    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        Loading.hide()
      }
    })

    return {
      showLoading() {
        Loading.show({
          delay: 400 // ms
        })
        timer = setTimeout(() => {
          Loading.hide()
          timer = void 0
        }, 2000)

      }
    }
  }
}
</script>
