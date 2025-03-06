<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ElNotification, type FormInstance } from 'element-plus'

import { OPTIONS_TYPE } from '@/constants'
import { useAccountsStore } from '@/stores/accounts-store.ts'

const accountsStore = useAccountsStore()

const emit = defineEmits(['close'])
const ruleFormRef = ref<FormInstance>()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (!valid) return
    createAccount()
  })
}

const createAccount = () => {
  if (!accountsStore.findAccountByLogin(formNewAccount.login)) {
    accountsStore.createAccount({
      tags: formNewAccount.tags
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((text) => ({ text })),
      type: formNewAccount.type,
      login: formNewAccount.login,
      password: formNewAccount.type === 'Local' ? formNewAccount.password : null
    })
    resetForm()
    emit('close')
  } else {
    ElNotification({
      title: 'Error',
      message: 'Учетная запись с таким логином уже существут',
      type: 'error'
    })
  }
}

const resetForm = () => {
  formNewAccount.tags = ''
  formNewAccount.type = ''
  formNewAccount.login = ''
  formNewAccount.password = ''
}

const formNewAccount = reactive({
  tags: '',
  type: '',
  login: '',
  password: ''
})

const isSelectedLocal = computed(() => formNewAccount.type === 'Local')
</script>

<template>
  <ElForm
    ref="ruleFormRef"
    :model="formNewAccount"
  >
    <ElFormItem prop="tags">
      <ElInput
        v-model="formNewAccount.tags"
        placeholder="Введите метки"
        type="textarea"
        maxlength="50"
      />
    </ElFormItem>
    <ElFormItem
      prop="type"
      required
    >
      <ElSelect
        v-model="formNewAccount.type"
        placeholder="Выберите тип записи"
        size="large"
      >
        <ElOption
          v-for="item in OPTIONS_TYPE"
          :key="item.name"
          :label="item.name"
          :value="item.value"
        />
      </ElSelect>
    </ElFormItem>
    <ElFormItem
      prop="login"
      required
    >
      <ElInput
        v-model="formNewAccount.login"
        type="text"
        placeholder="Введите логин"
        maxlength="100"
      />
    </ElFormItem>

    <ElFormItem
      v-if="isSelectedLocal"
      required
      prop="password"
    >
      <ElInput
        v-model="formNewAccount.password"
        prop="password"
        type="password"
        placeholder="Введите пароль"
        maxlength="100"
        show-password
      />
    </ElFormItem>
    <ElButton
      type="primary"
      @click="submitForm(ruleFormRef)"
    >
      Создать
    </ElButton>
  </ElForm>
</template>

<style scoped></style>
