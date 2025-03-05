<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import TableAccounts from '@/components/tables/TableAccounts.vue'
</script>

<template>
  <ElSpace
    size="large"
    fill
    direction="vertical"
    class="page-container"
  >
    <ElSpace size="large">
      <h1>Учетные записи</h1>
      <ElButton
        type="primary"
        size="large"
      >
        <IconPlus />
      </ElButton>
    </ElSpace>

    <ElSpace size="large">
      <p>
        Для указания нексольких меток для одной пары логин/пароль используйте
        разделитель ;
      </p>
    </ElSpace>

    <TableAccounts />
  </ElSpace>
</template>

<style scoped>
.page-container {
  width: 100%;
}
</style>
