<template>
  <div class="q-pa-md">
    <q-btn color="purple" @click="showLoading" label="Show Loading" />
    <q-btn color="purple" @click="hideLoading" label="hide Loading" />
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
        console.log(Loading.isActive)
        Loading.show({
          delay: 400 // ms
        })


      },
      hideLoading() {
        console.log(Loading.isActive)
        Loading.hide()


      }
    }
  }
}
</script>
