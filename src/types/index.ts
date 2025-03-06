export interface IAccount {
  tags: ITag[]
  type: string
  login: string
  password: string | null
}

export interface ITag {
  text: string
}
