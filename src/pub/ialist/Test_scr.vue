<template>
  <IaHeader :activeList="0" />
  <div class="relative-position">
    <div class="example-area q-pa-lg scroll">
      <div class="example-filler" />
      <q-intersection
        transition="scale"
        v-intersection="onIntersection"
        class="example-observed text-center rounded-borders"
      >
        Observed Element
      </q-intersection>

      <div class="example-filler" />
    </div>

    <div
      class="example-state rounded-borders text-center absolute-top q-mt-md q-ml-md q-mr-lg text-white"
      :class="visibleClass"
    >
      {{ visible === true ? 'Visible' : 'Hidden' }}
    </div>
  </div>
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import IaHeader from 'src/pub/ialist/header/IaListHeader.vue';
const metaData = {};
export default {
  components: {
    IaHeader,
  },
  props: {},
  setup() {
    const visible = ref(false);

    const route = useRoute();
    onMounted(() => {
      // 메타
      metaData.title = route.name;
      console.log(route.name);
      useMeta(metaData);
    });
    return {
      loremipsum:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // 스크롤 인터렉션
      visible,
      visibleClass: computed(() => `scr-${visible.value ? 'on' : 'off'}`),

      onIntersection(entry) {
        visible.value = entry.isIntersecting;
      },
    };
  },
};
</script>

<style lang="sass">
.example-state
  background: #ccc
  font-size: 20px
  color: #282a37
  padding: 10px
  opacity: 0.8

.example-observed
  width: 100%
  font-size: 20px
  color: #ccc
  background: #282a37
  padding: 10px

.example-area
  height: 300px

.example-filler
  height: 500px
.scr-on
  animation: q-bounce 2s infinite

@keyframes q-bounce
  0%, 20%, 50%, 80%, 100%
    transform: translateY(0)
  40%
    transform: translateY(-30px)
  60%
    transform: translateY(-15px)
</style>
