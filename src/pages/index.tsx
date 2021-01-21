import React from 'react'

import {
  Container,
  Header,
  Bars,
  Cart,
  SearchDesk,
  SearchMobile,
  ProductsContainer,
  ProductNumber,
  SearchContainer
} from '../styles/pages/Home'
import Logo from '../assets/logo.svg'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Bars />

        <Logo />

        <SearchDesk placeholder="O que está procurando ?" />

        <ProductsContainer>
          <Cart />
          <ProductNumber>
            <span>1</span>
          </ProductNumber>
        </ProductsContainer>
      </Header>

      <SearchContainer>
        <SearchMobile placeholder="O que está procurando ?" />
      </SearchContainer>
    </Container>
  )
}
