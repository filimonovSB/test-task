import type { IAccount } from '@/types'

const ACCOUNTS_DEFAULT: IAccount[] = [
  {
    tags: '1',
    type: {
      name: 'local',
      value: 'local'
    },
    login: 'user',
    password: '123456'
  },
  {
    tags: '2',
    type: {
      name: 'local',
      value: 'local'
    },
    login: 'user2',
    password: '123456'
  },
  {
    tags: '3',
    type: {
      name: 'local',
      value: 'local'
    },
    login: 'user3',
    password: '123456'
  }
]

export default ACCOUNTS_DEFAULT
