import type { IAccount } from '@/stores/accounts-store.ts'

const ACCOUNTS_DEFAULT: IAccount[] = [
  {
    tags: '1',
    type: {
      name: 'local',
      value: 'local'
    },
    login: 'deemer',
    password: '123456'
  },
  {
    tags: '2',
    type: {
      name: 'local',
      value: 'local'
    },
    login: 'deemer',
    password: '123456'
  },
  {
    tags: '3',
    type: {
      name: 'local',
      value: 'local'
    },
    login: 'deemer',
    password: '123456'
  }
]

export default ACCOUNTS_DEFAULT
