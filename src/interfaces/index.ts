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