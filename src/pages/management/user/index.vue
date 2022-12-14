<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select v-model="listQuery.authority" class="filter-item"
        :placeholder="$t('user.role')" clearable @change="handleFilter">
        <el-option v-for="item in roleOptions" :key="item.value"
          :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="listQuery.search" :placeholder="$t('table.search')"
        style="width: 200px;" class="filter-item" @keyup.enter="handleFilter" />
      <el-button class="filter-item" type="primary" @click="handleFilter">
        <el-icon style="margin-right: 10px;">
          <Search />
        </el-icon>{{ $t('table.search') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary"
        @click="handleCreate">
        <el-icon style="margin-right: 10px;">
          <Edit />
        </el-icon>{{ $t('table.add') }}
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="로드중"
      border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65">
        <template v-slot="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column width="110px" align="center"
        :label="$t('user.username')">
        <template v-slot="scope">
          <span>{{ scope.row.login }}</span>
        </template>
      </el-table-column>
      <el-table-column width="110px" align="center"
        :label="$t('user.nickname')">
        <template v-slot="scope">
          <span>{{ scope.row.nickName }}</span>
        </template>
      </el-table-column>
      <el-table-column width="120px" align="center" :label="$t('user.mobile')">
        <template v-slot="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column width="150px" align="center" :label="$t('user.role')">
        <template v-slot="scope">
          <span>{{ formatAuthorities(scope.row.authorities) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.actions')"
        class-name="small-padding fixed-width">
        <template v-slot="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">
            {{ $t('table.edit') }}</el-button>
          <el-button type="warning" @click="handlePassword(scope.row)">
            {{ $t('login.password') }}
          </el-button>
          <el-button type="danger" @click="handleDelete(scope.row, getData)">
            {{ $t('table.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" v-model:page="listQuery.page"
      v-model:limit="listQuery.size" @pagination="getData" />

    <el-dialog v-model="dialog.visible">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left"
        label-width="70px" style="width: 400px; margin-left:50px;">
        <!-- Edit -->
        <template v-if="dialog.status == 'update'">
          <el-form-item :label="$t('table.id')">
            <el-input v-model="temp.id" type="text" placeholder="id" disabled />
          </el-form-item>
        </template>

        <template v-if="dialog.status == 'update' || dialog.status == 'create'">
          <el-form-item :label="$t('user.username')" prop="login"
            label-width="100px">
            <el-input v-model="temp.login" type="text" placeholder="아이디"
              :disabled="dialog.status !== 'create'" />
          </el-form-item>
          <el-form-item :label="$t('user.role')" prop="authorities"
            label-width="100px">
            <el-select v-model="temp.authorities" :placeholder="$t('user.role')"
              clearable multiple>
              <el-option v-for="item in updateRoleOptions" :key="item.value"
                :label="item.label" :value="item.value"
                :disabled="item.disabled" />
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('user.nickname')" label-width="100px">
            <el-input v-model="temp.nickName" type="text" placeholder="이름" />
          </el-form-item>
          <el-form-item :label="$t('user.mobile')" prop="mobile"
            label-width="100px">
            <el-input v-model="temp.mobile" type="text" placeholder="전화 번호" />
          </el-form-item>
        </template>

        <template v-if="dialog.status == 'password'">
          <el-form-item :label="$t('user.adminPassword')" prop="currentPassword"
            label-width="130px">
            <el-input v-model="temp.currentPassword" type="password"
              placeholder="현재 비밀번호" />
          </el-form-item>
          <el-form-item :label="$t('user.password')" prop="newPassword"
            label-width="130px">
            <el-input v-model="temp.newPassword" type="password"
              placeholder="변경 비밀번호" />
          </el-form-item>
        </template>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialog.visible = false">{{ $t('table.cancel') }}
          </el-button>
          <el-button v-if="dialog.status == 'create'" type="primary"
            @click="createData()">{{ $t('table.confirm') }}
          </el-button>
          <el-button v-if="dialog.status == 'update'" type="primary"
            @click="updateData()">{{ $t('table.confirm') }}
          </el-button>
          <el-button v-if="dialog.status == 'password'" type="primary"
            @click="changePwd()">{{ $t('table.confirm') }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import Pagination from '@/components/Pagination/index.vue'
import { Search, Edit } from '@element-plus/icons-vue'
import { formatAuthorities, roleOptions, updateRoleOptions } from '@/utils/app-option'
import useUserData from './composables/useUserData'
import useDialog from './composables/dialog'
import useCreateData from './composables/dialog/useCreateData'
import useUpdateData from './composables/dialog/useUpdateData'
import usePassword from './composables/dialog/usePassword'

const { list, total, listLoading, listQuery,
  getData, handleFilter } = useUserData()

const { temp, dialog, rules } = useDialog()
const { handleCreate, createData } = useCreateData(temp, dialog, getData)
const { handleUpdate, updateData } = useUpdateData(temp, dialog, getData)
const { handlePassword, changePwd } = usePassword(temp, dialog)

</script>

<script>
import { deleteUser } from '@/api/user'

export default {
  name: 'UserManagement',
  methods: {
    async handleDelete(row, getData) {
      try {
        await this.$confirm('주의', '삭제 하시겠습니까？', {
          confirmButtonText: '확인',
          cancelButtonText: '취소',
          type: 'warning'
        })

        await deleteUser(row.login)
        getData()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
</style>
