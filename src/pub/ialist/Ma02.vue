<template>
  <div class="wrap_ia_list">
    <IaHeader :activeList="2" :foo="bar" @update:foo="(val) => (bar = val)" />
  </div>
  <div>emit test //{{ bar }}</div>
</template>

<script>
// import { ref } from 'vue';
import IaHeader from 'src/pub/ialist/header/IaListHeader.vue';

export default {
  components: {
    IaHeader,
  },
  setup() {
    return {};
  },
  data: () => ({
    bar: '',
  }),
  methods: {
    testEmit() {
      this.$emit('update:foo', newValue);
    },
  },
};
</script>
