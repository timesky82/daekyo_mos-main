<template>
  <div class="ia_list">
    <header class="header_fixed" :class="{ sticky: uiSticky }">
      <div class="title_area">
        <h1>Ia List</h1>
        <h3 class="made">아이캔 매니지먼트</h3>
      </div>
      <div class="link_box">
        <router-link v-for="(item, index) in iaLinkData" :key="index" :to="item.link"
          :class="{ on: item.index == activeList }">
          {{ item.txt }}{{ item.index }}{{ item.index }}
        </router-link>
      </div>
    </header>
    <div ref="scrollTest"></div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ['activeList'],
  data: () => ({
    //
    emitdata: '',
    // uiSticky 헤더 데이터
    uiSticky: false,
    //
    linkIdx: '',
    iaLinkData: [
      {
        txt: '퍼블리싱 가이드',
        link: '/pub/',
      },
      {
        txt: '테스트[TEST]',
        link: '/pub/test',
      },

      {
        txt: '01_Main[MA]',
        link: '/pub/ma01',
      },
      {
        txt: '02_Main[MA]',
        link: '/pub/ma02',
      },
      {
        txt: '페이지 유형 샘플',
        link: '/pub/sample',
      },
    ],
  }),
  methods: {},
  created() {
    this.$emit('update:foo', this.uiSticky);
    // console.log(this.$route.meta.idx)
  },
  setup() {
    // expose to template and other options API hooks
    return {};
  },
  mounted() {
    document.addEventListener('scroll', this.scroll);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.scroll);
  },
};
</script>
<style lang="scss">
@import 'src/assets/scss/ia_list.scss';
</style>
