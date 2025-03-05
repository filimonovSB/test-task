<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts-store.ts'

const accountsStore = useAccountsStore()
</script>

<template>
  <ElTable
    :data="accountsStore.accounts"
    border
  >
    <ElTableColumn
      width="auto"
      label="Метки"
      prop="tags"
    />
    <ElTableColumn
      width="auto"
      label="Тип записи"
      prop="tags"
    />
    <ElTableColumn
      width="auto"
      label="Логин"
      prop="tags"
    />
    <ElTableColumn
      width="auto"
      label="Пароль"
      prop="password"
    />
    <ElTableColumn
      width="auto"
      prop="password"
    >
      <template #default="scope">
        <ElButton
          type="primary"
          size="default"
          class="table-button"
        >
          X
        </ElButton>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style scoped></style>
