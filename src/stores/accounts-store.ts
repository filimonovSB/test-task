import { ref } from 'vue'
import { defineStore } from 'pinia'

import ACCOUNTS_DEFAULT from '@/constants'
import type { IAccount } from '@/types'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<IAccount[]>(ACCOUNTS_DEFAULT)

  const removeAccount = (login: string) => {
    accounts.value = accounts.value.filter(
      (account: IAccount) => account.login !== login
    )
  }

  const createAccount = (newAccount: IAccount) => {
    console.log('createAccount')
    accounts.value.push(newAccount)
    console.log(newAccount)
  }

  return { accounts, removeAccount, createAccount }
})
