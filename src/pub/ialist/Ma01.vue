<template>
  <IaHeader :activeList="1" />
  <div>
    <q-table
      title="기본가이드"
      :rows="rows"
      :columns="columns"
      row-key="index"
      :pagination="initialPagination"
      class="table_01"
    >
      <template v-slot:body-cell-link="props">
        <q-td :props="props">
          <router-link :to="props.row.name.toLowerCase()">
            pub/{{ props.row.name.toLowerCase() }}</router-link
          >
        </q-td>
      </template>
      <template v-slot:body-cell-infor="props">
        <q-td :props="props" :class="getClass(props.row.Infor.state)">
          {{ props.row.Infor.date }}/{{ props.row.Infor.state }}/{{
            props.row.Infor.worker
          }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import IaHeader from 'src/pub/ialist/header/IaListHeader.vue';

const columns = [
  {
    name: 'index',
    label: 'idx',
    align: 'left',
    sortable: true,
    field: (row) => row.index,
  },
  {
    name: 'link',
    label: 'link',
    align: 'left',
    sortable: true,
    field: (row) => row.name,
  },
  {
    name: 'Depth2',
    align: 'center',
    label: 'Depth2',
    field: 'Depth2',
    sortable: true,
  },
  {
    name: 'Depth3',
    align: 'center',
    label: 'Depth3',
    field: 'Depth3',
    sortable: true,
  },
  {
    name: 'infor',
    label: 'infor',
    align: 'center',
    sortable: true,
    field: (row) => row.date,
  },
  { name: 'Comment', align: 'center', label: 'Comment', field: 'Comment' },
];

const seed = [
  {
    name: 'MA01',
    Depth2: 'temp2',
    Depth3: 'temp3',
    Infor: {
      date: '22.12.01',
      state: '진행중',
      worker: '윤상기',
    },
    Comment: '비고',
  },
  {
    name: 'MA02',
    Depth2: 'temp2',
    Depth3: 'temp3',
    Infor: {
      date: '22.12.01',
      state: '완료',
      worker: '윤상기',
    },
    Comment: '비고',
  },
];
let rows = [];
rows = rows.concat(seed.slice(0).map((r) => ({ ...r })));

rows.forEach((row, index) => {
  row.index = index;
});
export default {
  components: {
    IaHeader,
  },
  setup() {
    return {
      visibleColumns: ref([
        'name',
        'Depth2',
        'date',
        'Comment',
        'carbs',
        'protein',
        'sodium',
        'calcium',
        'iron',
      ]),
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        // rowsNumber: xx if getting data from a server
      },
      columns,
      rows,
    };
  },
  methods: {
    getClass(priority) {
      switch (priority) {
        case '완료':
          return 'end';
        case '진행중':
          return 'ing';
        case '수정':
          return 'edit';
        default:
          return '';
      }
    },
  },
};
</script>
