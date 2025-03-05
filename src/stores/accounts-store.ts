import { ref } from 'vue'
import { defineStore } from 'pinia'

import ACCOUNTS_DEFAULT from '@/constants'

export interface IAccount {
  tags: string
  type: {
    name: string
    value: string
  }
  login: string
  password?: string
}

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<IAccount[]>(ACCOUNTS_DEFAULT)
  return { accounts }
})
