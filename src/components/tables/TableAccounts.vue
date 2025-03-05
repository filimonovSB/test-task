<script setup lang="ts">
import IconTrash from '@/components/icons/IconTrash.vue'
import { useAccountsStore } from '@/stores/accounts-store.ts'

const accountsStore = useAccountsStore()

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
</script>

<template>
  <ElTable
    :data="accountsStore.accounts"
    border
    width="100%"
  >
    <ElTableColumn
      width="auto"
      label="Метки"
      prop="tags"
    >
      <template #default="scope">
        <ElInput
          v-model="scope.row.tags"
          placeholder="Введите метку"
        />
      </template>
    </ElTableColumn>
    <ElTableColumn
      width="auto"
      label="Тип записи"
      prop="tags"
    >
      <template #default="scope">
        <ElSelect
          v-model="scope.row.types"
          placeholder="Выберите тип записи"
          size="large"
        >
          <ElOption
            v-for="item in types"
            :key="item"
            :label="item.name"
            :value="item.value"
          />
        </ElSelect>
      </template>
    </ElTableColumn>
    <ElTableColumn
      width="auto"
      label="Логин"
      prop="tags"
    >
      <template #default="scope">
        <ElInput
          v-model="scope.row.login"
          type="text"
          placeholder="Введите логин"
        />
      </template>
    </ElTableColumn>
    <ElTableColumn
      width="auto"
      label="Пароль"
      prop="password"
    >
      <template #default="scope">
        <ElInput
          v-model="scope.row.password"
          type="password"
          placeholder="Введите пароль"
          show-password
        />
      </template>
    </ElTableColumn>
    <ElTableColumn width="80">
      <template #default="scope">
        <ElButton
          type="primary"
          size="default"
          class="table-button"
        >
          <IconTrash />
        </ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style scoped></style>
