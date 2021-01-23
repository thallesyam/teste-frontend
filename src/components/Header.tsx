import React, { useContext } from 'react'

import {
  Header,
  Cart,
  User,
  UserIconsContainer,
  UserContainer,
  SearchDesk,
  CartContainer,
  ProductNumber,
  SearchContainer,
  SearchMobile
} from '../styles/pages/components/Header'
import Logo from '../assets/logo.svg'
import { CountContext } from '../contexts/ProductsCount'
import MobileNav from './MobileNav'

export default function Home(): JSX.Element {
  const { count } = useContext(CountContext)!

  return (
    <>
      <Header>
        <MobileNav />

        <Logo />
        <SearchDesk placeholder="O que está procurando ?" />
        <UserIconsContainer>
          <UserContainer>
            <User />
            <span>Minha conta</span>
          </UserContainer>

          <CartContainer>
            <Cart />
            <ProductNumber>
              <span>{count}</span>
            </ProductNumber>
          </CartContainer>
        </UserIconsContainer>
      </Header>
      <SearchContainer>
        <SearchMobile placeholder="O que está procurando ?" />
      </SearchContainer>
    </>
  )
}
