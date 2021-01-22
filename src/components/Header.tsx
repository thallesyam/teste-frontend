import React from 'react'

import {
  Header,
  Bars,
  Cart,
  User,
  UserContainer,
  SearchDesk,
  ProductsContainer,
  ProductNumber,
  SearchContainer,
  SearchMobile
} from '../styles/pages/components/Header'
import Logo from '../assets/logo.svg'

export default function Home(): JSX.Element {
  return (
    <>
      <Header>
        <Bars />

        <Logo />

        <SearchDesk placeholder="O que está procurando ?" />

        <div>
          <UserContainer>
            <User />
            <span>Minha conta</span>
          </UserContainer>

          <ProductsContainer>
            <Cart />
            <ProductNumber>
              <span>1</span>
            </ProductNumber>
          </ProductsContainer>
        </div>
      </Header>
      <SearchContainer>
        <SearchMobile placeholder="O que está procurando ?" />
      </SearchContainer>
    </>
  )
}
