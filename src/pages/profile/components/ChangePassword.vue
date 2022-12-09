<template>
  <div class="form">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="Old Password" prop="oldPwd">
        <el-input v-model="form.oldPwd" type="password" auto-complete="off" />
      </el-form-item>
      <el-form-item label="new password" prop="newPwd">
        <el-input v-model="form.newPwd" type="password" auto-complete="off" />
      </el-form-item>
      <el-form-item label="Confirm the new password" prop="confirmPwd">
        <el-input v-model="form.confirmPwd" type="password"
          auto-complete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('form')">Keep</el-button>
        <el-button @click="reset('form')">Empty</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { changePassword } from '@/api/account'
import { LOGIN_VALID_CHARACTER } from '@/utils/validate'

export default {
  data() {
    return {
      form: {
        oldPwd: '',
        newPwd: '',
        confirmPwd: ''
      },
      rules: {
        oldPwd: [{ required: true, message: 'Please enter old password' }],
        newPwd: [LOGIN_VALID_CHARACTER, { required: true, message: 'Please enter a new password' }],
        confirmPwd: [
          { required: true, message: 'please confirm password' },
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error('Please enter the confirmation password'))
              } else if (value !== this.form.newPwd) {
                callback(new Error('The passwords entered twice are inconsistent!'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const req = {
            currentPassword: this.form.oldPwd,
            newPassword: this.form.newPwd
          }
          await changePassword(req)
          this.$notify({
            title: 'Successfully modified',
            type: 'success'
          })
          this.reset(formName)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.form {
  margin-top: 10px;
  width: 300px;
}
</style>
