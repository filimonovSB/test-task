import type { IAccount } from '@/types'

export const ACCOUNTS_DEFAULT: IAccount[] = [
  {
    tags: [{ text: '1' }, { text: '2' }, { text: '3' }],
    type: 'Local',
    login: 'user',
    password: '123456'
  },
  {
    tags: [{ text: '1' }, { text: '2' }, { text: '3' }],
    type: 'Local',
    login: 'user2',
    password: '123456'
  },
  {
    tags: [{ text: '1' }, { text: '2' }, { text: '3' }],
    type: 'Local',
    login: 'user3',
    password: '123456'
  }
]

export const OPTIONS_TYPE = [
  {
    name: 'Локальная',
    value: 'Local'
  },
  {
    name: 'LDAP',
    value: 'LDAP'
  }
]
