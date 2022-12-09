<template>
  <div class="wrap_ia_list">
    <IaHeader :activeList="0" />
    <q-intersection transition="jump-up" id="container">
      <article class="basic">
        <h3 class="tit_article">[BUTTON]</h3>
        <div class="txt_box">
          <ul>
            <li>button은 btn 클래스를 기본으로 가진다.</li>
            <li>
              색상별로 btn-primary, btn-secondary, btn-warn 클래스를 추가로
              가진다.
            </li>
            <li>보더라인만 있는 경우 btn-border 클래스를 추가로 가진다.</li>
            <li>버튼 속성에 따라 disabeld를 적용할 수 있다.</li>
          </ul>
        </div>
        <div class="sample_box">
          <div class="q-pa-md q-gutter-sm">
            <q-btn flat color="primary" label="Flat" />
            <q-btn flat rounded color="primary" label="Flat Rounded" />
            <q-btn flat round color="primary" icon="card_giftcard" />
            <br />
            <q-btn outline color="primary" label="Outline" />
            <q-btn outline rounded color="primary" label="Outline Rounded" />
            <q-btn outline round color="primary" icon="card_giftcard" />
            <br />
            <q-btn push color="primary" label="Push" />
            <q-btn push color="primary" round icon="card_giftcard" />
            <q-btn push color="white" text-color="primary" label="Push" />
            <q-btn push color="white" text-color="primary" round icon="card_giftcard" />
            <br />
            <q-btn unelevated color="primary" label="Unelevated" />
            <q-btn unelevated rounded color="primary" label="Unelevated Rounded" />
            <q-btn unelevated round color="primary" icon="card_giftcard" />
            <br />
            <q-btn no-caps color="primary" label="No caps" />
            <br />
            <q-btn class="glossy" color="secondary" label="Glossy" />
            <q-btn class="glossy" rounded color="negative" label="Glossy Rounded" />
            <q-btn class="glossy" round color="primary" icon="card_giftcard" />
            <q-btn class="glossy" round color="secondary" icon="local_florist" />
            <q-btn class="glossy" round color="negative" icon="local_activity" />
          </div>
        </div>
      </article>
      <article class="basic">
        <h3 class="tit_article">[RADIO]</h3>
        <div class="txt_box">
          <ul>
            <li>비활성 상태일때 disabled 속성 추가</li>
          </ul>
        </div>
        <div class="sample_box">
          <div class="q-gutter-sm">
            <q-radio v-model="dataRadio" val="primary" label="primary" color="primary" />
            <q-radio v-model="dataRadio" val="secondary" label="secondary" color="secondary" />
            <q-radio v-model="dataRadio" val="warning" label="warning" color="warning" />
            <q-radio v-model="dataRadio" val="negative" label="negative" color="negative" />
            <q-radio v-model="dataRadio" val="info" label="info" color="info" />
          </div>
          <q-radio disable v-model="dataRadio" val="line" label="disable" />
        </div>
      </article>
      <article class="basic">
        <h3 class="tit_article">[CHECKBOX]</h3>
        <div class="txt_box">
          <ul>
            <li>비활성 상태일때 disabled 속성 추가</li>
          </ul>
        </div>
        <div class="sample_box">
          <div class="q-gutter-sm">
            <q-checkbox v-model="dataCheck" val="primary" label="primary" color="primary" />
            <q-checkbox v-model="dataCheck" val="secondary" label="secondary" color="secondary" />
            <q-checkbox v-model="dataCheck" val="warning" label="warning" color="warning" />
            <q-checkbox v-model="dataCheck" val="negative" label="negative" color="negative" />
            <q-checkbox v-model="dataCheck" val="info" label="info" color="info" />
            <q-checkbox disable v-model="dataCheck" val="black" label="disable" color="black" />
          </div>
        </div>
      </article>

      <article class="basic">
        <h3 class="tit_article">[SELECT]</h3>
        <div class="txt_box">
          <ul>
            <li>셀렉트 박스</li>
          </ul>
        </div>
        <!-- <div class="sample_box">
        <div class="w100p row-3">
          <q-select v-model="model" :options="optionsSelect" label="Standard" />

          <q-select
            filled
            v-model="model"
            :options="optionsSelect"
            label="Filled"
          />

          <q-select
            outlined
            v-model="model"
            :options="optionsSelect"
            label="Outlined"
          />

          <q-select
            standout
            v-model="model"
            :options="optionsSelect"
            label="Standout"
          />

          <q-select
            standout="bg-secondary text-white"
            v-model="model"
            :options="optionsSelect"
            label="Custom standout"
          />

          <q-select
            borderless
            v-model="model"
            :options="optionsSelect"
            label="Borderless"
          />

          <q-select
            rounded
            filled
            v-model="model"
            :options="optionsSelect"
            label="Rounded filled"
          />

          <q-select
            rounded
            outlined
            v-model="model"
            :options="optionsSelect"
            label="Rounded outlined"
          />

          <q-select
            rounded
            standout
            v-model="model"
            :options="optionsSelect"
            label="Rounded standout"
          />

          <q-select
            square
            filled
            v-model="model"
            :options="optionsSelect"
            label="Square filled"
          />

          <q-select
            square
            outlined
            v-model="model"
            :options="optionsSelect"
            label="Square outlined"
          />

          <q-select
            square
            standout
            v-model="model"
            :options="optionsSelect"
            label="Square standout"
          />
        </div>
      </div> -->
      </article>
      <article class="basic">
        <h3 class="tit_article">[INPUT]</h3>
        <div class="txt_box">
          <ul>
            <li>input state</li>
          </ul>
        </div>
        <div class="sample_box" id="container" tabindex="-1">
          <div class="w100p">
            <div class="q-pa-md" style="max-width: 300px">
              <q-input class="mb10" filled v-model="dataInput" label="인풋 라벨 고정 에러" standout="type_00" bottom-slots
                :error="true" hint="유효성 검사 힌트">
                <template v-slot:error> 에러메시지 샘플 </template>
              </q-input>
              <q-input filled v-model="dataInput" label="인풋 라벨 고정 정상" standout="type_00" bottom-slots :error="false"
                hint="유효성 검사 힌트">
                <template v-slot:error>
                  Please use maximum 3 characters.
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </article>
    </q-intersection>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar';
import IaHeader from 'src/pub/ialist/header/IaListHeader.vue';
const metaData = {};
export default {
  components: {
    IaHeader,
  },
  data() {
    return {
      dataInput: '인풋테스트',
      dataRadio: 'primary',
      dataCheck: ['primary', 'secondary', 'negative'],
      optionsSelect: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
    };
  },
  setup() {
    const route = useRoute();
    onMounted(() => {
      metaData.title = route.name;
      // console.log(route.name);
      useMeta(metaData);
    });
  },
  // mounted() {},
};
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 250px
</style>
