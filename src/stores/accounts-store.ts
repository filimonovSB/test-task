import { ref } from 'vue'
import { defineStore } from 'pinia'

import { ACCOUNTS_DEFAULT } from '@/constants'
import type { IAccount } from '@/types'

export const useAccountsStore = defineStore(
  'accounts',
  () => {
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

    const findAccountByLogin = (login: string): IAccount | undefined => {
      return accounts.value.find((account: IAccount) => account.login === login)
    }

    const updateTagsByLogin = (newValue: string, login: string) => {
      const newChar = newValue.split('')[newValue.length - 1]
      const findAccount: IAccount | undefined = findAccountByLogin(login)
      if (!findAccount) return
      if (newChar !== ';') {
        const lastElement = findAccount.tags.at(-1)
        if (!lastElement) return
        lastElement.text += newChar
      } else findAccount.tags.push({ text: '' })
    }

    const updateTypeByLogin = (newValue: string, login: string) => {
      const findAccount: IAccount | undefined = findAccountByLogin(login)
      if (!findAccount) return
      if (newValue === 'LDAP') findAccount.password = null
      findAccount.type = newValue
    }

    return {
      accounts,
      removeAccount,
      createAccount,
      updateTagsByLogin,
      updateTypeByLogin,
      findAccountByLogin
    }
  },
  {
    persist: true
  }
)
