export interface IProductInput {
  name: string,
  amount: string,
}

export interface IProductId extends IProductInput {
  id: number,
}

export interface IProductOrderId extends IProductId {
  orderId: number,
}

export interface IUserInput {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUserId extends IUserInput {
  id: number,
}

export interface IToken {
  token: string,
}