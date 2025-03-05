<script setup lang="ts">
import { ref } from 'vue'

import IconPlus from '@/components/icons/IconPlus.vue'
import ModalCreateAccount from '@/components/modals/ModalCreateAccount.vue'
import TableAccounts from '@/components/tables/TableAccounts.vue'
import UiClueBlock from '@/components/ui/UiClueBlock.vue'

const visibleModal = ref(false)

const openDialog = () => {
  visibleModal.value = true
}

const closeDialog = () => {
  visibleModal.value = false
}
</script>

<template>
  <div class="page-container">
    <ElSpace size="large">
      <h1>Учетные записи</h1>
      <ElButton
        type="primary"
        size="large"
        @click="openDialog"
      >
        <IconPlus />
      </ElButton>
    </ElSpace>

    <UiClueBlock>
      Для указания нескольких меток для одной пары логин/пароль используйте
      разделитель ;
    </UiClueBlock>

    <TableAccounts />
  </div>

  <ModalCreateAccount
    v-model="visibleModal"
    @close="closeDialog"
  />
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}
</style>
