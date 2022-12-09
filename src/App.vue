<template>
  <el-config-provider :locale="locale">
    <ul class="skip_menu">
      <li><a :href="$route.path + '#header'">메뉴바로가기</a></li>
      <li><a :href="$route.path + '#container'">컨텐츠 바로가기</a></li>
    </ul>
    <router-view />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar, useMeta } from 'quasar';
import messages from '@/i18n/index'
import 'default-passive-events' // eliminate browser passive events warnings
import { mapState } from 'pinia'
import { useEventStore } from '@/stores/event-store'
import { useAppStore } from '@/stores/app-store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
const metaData = {
  // sets document title
  meta: {
    // lang: 'ko-KR',
    description: {
      name: 'description',
      content: "모두의 가능성을 실현하는 '세상에서 가장 큰 학교' 대교입니다.",
    },
    keywords: {
      name: 'keywords',
      content: '세상에서 가장 큰 학교, 대교닷컴',
    },
    // keywords: {
    //   name: 'keywords',
    //   content: '세상에서 가장 큰 학교, 대교닷컴',
    // },
    // keywords: { name: 'keywords', content: 'Quasar website' },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8',
    },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle) {
        return `${ogTitle} | 대교`;
      },
    },
    ogTitle: {
      property: 'og:description',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(description) {
        return `${description} "모두의 가능성을 실현하는 '세상에서 가장 큰 학교' 대교입니다."`;
      },
    },
  },
  title: '루트페이지',
  titleTemplate: (title) => `${title} - 대교 드림스`,
  // meta tags

  // CSS tags
  // link: {
  //   material: {
  //     rel: 'stylesheet',
  //     href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  //   },
  // },

  // JS tags

  // <html> attributes
  htmlAttr: {
    // 'xmlns:cc': 'http://creativecommons.org/ns#'    ,
    // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined, // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined, // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)',
  },
};
export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar();
    $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 });
    useMeta(metaData);
  },
  computed: {
    ...mapState(useEventStore, ['loading', 'notification']),
    ...mapState(useAppStore, ['language']),
    locale() {
      return messages[this.language]
    }
  },
  watch: {
    loading(loading) {
      if (loading) {
        // start global loading
        NProgress.start()
      } else {
        // finish global loading
        NProgress.done()
      }
    },
    notification: {
      deep: true,
      handler: function (val, oldVal) {
        this.$message(val)
      }
    }
  }
})
</script>
