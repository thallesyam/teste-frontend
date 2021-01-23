import React from 'react'

import {
  ProductsContainer,
  SaleCall,
  Showcase,
  Product
} from '../styles/pages/components/Products'

const Products = (): JSX.Element => {
  return (
    <ProductsContainer>
      <SaleCall>
        <h1>Mais Vendidos</h1>
      </SaleCall>
      <Showcase>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </Showcase>
    </ProductsContainer>
  )
}

export default Products
