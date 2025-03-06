export interface IAccount {
  tags: {
    text: string
  }[]
  type: string
  login: string
  password: string | null
}
