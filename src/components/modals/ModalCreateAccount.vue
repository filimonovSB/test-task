<script setup lang="ts">
import { ref } from 'vue'

import { useAccountsStore } from '@/stores/accounts-store.ts'
import type { IAccount } from '@/types'
import { deepClone } from '@/utils'

const emmit = defineEmits(['close'])

const accountsStore = useAccountsStore()

const visibleModal = defineModel()

const emptyAccount = {
  tags: '',
  type: {
    name: '',
    value: ''
  },
  login: '',
  password: ''
}

const newAccount = ref<IAccount>(deepClone(emptyAccount))

const types = [
  {
    name: 'Локальная',
    value: 'Local'
  },
  {
    name: 'LDAP',
    value: 'LDAP'
  }
]

const closeDialog = () => {
  emmit('close')
}

const createAccount = () => {
  accountsStore.createAccount({ ...newAccount.value })
  emmit('close')
}

const resetAccount = () => {
  newAccount.value = deepClone(emptyAccount)
}
</script>

<template>
  <ElDialog
    v-model="visibleModal"
    title="Создать учетную запись"
    max-width="100"
    lock-scroll
    align-center
    @close="closeDialog"
  >
    <ElForm>
      <ElFormItem>
        <ElInput
          v-model="newAccount.tags"
          placeholder="Введите метки"
          type="textarea"
          maxlength="50"
        />
      </ElFormItem>
      <ElFormItem>
        <ElSelect
          v-model="newAccount.type.value"
          placeholder="Выберите тип записи"
          size="large"
        >
          <ElOption
            v-for="item in types"
            :key="item.name"
            :label="item.name"
            :value="item.value"
          />
        </ElSelect>
      </ElFormItem>
      <ElFormItem>
        <ElInput
          v-model="newAccount.login"
          type="text"
          placeholder="Введите логин"
          maxlength="100"
        />
      </ElFormItem>

      <ElFormItem>
        <ElInput
          v-model="newAccount.password"
          type="password"
          placeholder="Введите пароль"
          maxlength="100"
          show-password
        />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <div class="dialog-footer">
        <ElButton
          type="primary"
          size="default"
          class="table-button"
          @click="createAccount"
        >
          Создать
        </ElButton>
      </div>
    </template>
  </ElDialog>
</template>

<style scoped>
:deep(.el-textarea__inner) {
  padding: 10px;
  font-size: 14px;
  resize: none;
}
</style>
