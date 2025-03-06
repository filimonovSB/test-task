<script setup lang="ts">
import FormCreateAccount from '@/components/form/FormCreateAccount.vue'

const emmit = defineEmits(['close'])

const visibleModal = defineModel()

const closeDialog = () => {
  emmit('close')
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
    <FormCreateAccount @close="closeDialog" />
  </ElDialog>
</template>

<style scoped>
:deep(.el-textarea__inner) {
  padding: 10px;
  font-size: 14px;
  resize: none;
}
</style>
