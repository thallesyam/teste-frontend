interface Payment {
  quantity: number
  value: number
}

interface DetailsProduct {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice: number | null
  price: number
  installments: Array<Payment>
}

export interface Products {
  products: Array<DetailsProduct>
}
