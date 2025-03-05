export interface IAccountType {
  name: string
  value: string
}

export interface IAccount {
  tags: string
  type: IAccountType
  login: string
  password?: string
}
