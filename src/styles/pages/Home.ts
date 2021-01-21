import styled, { css } from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`
export const Header = styled.header`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`

const icons = css`
  color: var(--black);
  font-size: 2rem;
`

export const Bars = styled(FaBars)`
  ${icons}
  width: 2em;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Cart = styled(MdShoppingCart)`
  ${icons}
`

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
`

export const ProductNumber = styled.div`
  background-color: var(--alertColor);

  border-radius: 50%;

  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.8rem;
    color: var(--white);

    font-weight: 700;
  }
`

const Search = css`
  width: 100%;
  padding: 1rem 0;

  border: 0;
  border-bottom: 1px solid var(--grayLight);
  outline: none;

  @media (min-width: 768px) {
    width: 75%;
  }
`

export const SearchContainer = styled.section`
  padding: 0rem 2rem;
`

export const SearchDesk = styled.input`
  display: none;
  ${Search}

  @media (min-width: 768px) {
    display: block;
  }
`

export const SearchMobile = styled.input`
  ${Search}

  @media (min-width: 768px) {
    display: none;
  }
`
