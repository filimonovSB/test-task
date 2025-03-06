<script setup lang="ts">
import IconTrash from '@/components/icons/IconTrash.vue'
import { OPTIONS_TYPE } from '@/constants'
import { useAccountsStore } from '@/stores/accounts-store.ts'

const accountsStore = useAccountsStore()
const updateTags = (newValue: string, tags) => {
  accountsStore.updateTagsByLogin(newValue, tags)
}

const updateType = (newValue: string, login) => {
  accountsStore.updateTypeByLogin(newValue, login)
}
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
          :model-value="scope.row.tags.map((i) => i.text).join('; ')"
          placeholder="Введите метки"
          type="textarea"
          maxlength="50"
          @update:model-value="
            (newValue: string) => updateTags(newValue, scope.row.login)
          "
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
          v-model="scope.row.type"
          placeholder="Выберите тип записи"
          size="large"
          @change="(event: string) => updateType(event, scope.row.login)"
        >
          <ElOption
            v-for="item in OPTIONS_TYPE"
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
          maxlength="100"
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
          v-show="scope.row.type === 'Local'"
          v-model="scope.row.password"
          type="password"
          placeholder="Введите пароль"
          maxlength="100"
          show-password
        />
      </template>
    </ElTableColumn>
    <ElTableColumn width="80">
      <template #default="scope">
        <ElPopconfirm
          width="250"
          title="Вы действительно хотите удалить аккаунт?"
          confirm-button-text="Да"
          cancel-button-text="Нет"
          @confirm="accountsStore.removeAccount(scope.row.login)"
        >
          <template #reference>
            <ElButton
              type="primary"
              size="default"
              class="table-button"
            >
              <IconTrash />
            </ElButton>
          </template>
        </ElPopconfirm>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<style scoped>
:deep(.el-textarea__inner) {
  padding: 10px;
  font-size: 14px;
  resize: none;
}
</style>
