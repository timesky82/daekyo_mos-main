<template>
    <div class="wrap_ia_list">
        <div class="q-pa-md">
            <q-btn color="purple" @click="showLoading" label="Show Loading" />
        </div>
        <IaHeader :activeList="0" />
        <div class="q-pa-md">
            <div class="row justify-center q-gutter-sm">
                <q-intersection v-for="index in 12" :key="index" transition="jump-up" transitionDuration="400"
                    margin="-10px 0px" class="example-item">
                    <q-card class="q-ma-sm" style="width: 250px">

                        <q-img :src="`https://placeimg.com/500/300/nature/` + index" :ratio="16 / 9"
                            placeholder-src="https://www.daekyo.com/static/img/main/bigschool_logo.webp" />

                        <q-card-section>
                            <div class="text-h6">Card #{{ index }}</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>
                    </q-card>
                </q-intersection>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { useMeta, useQuasar } from 'quasar';
import IaHeader from 'src/pub/ialist/header/IaListHeader.vue';
const metaData = {};
export default {
    components: {
        IaHeader,
    },
    data() {
        return {};
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
<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
