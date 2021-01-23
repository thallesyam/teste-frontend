import styled, { css } from 'styled-components'
import { MdShoppingCart } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'

// Header Component
export const UserIconsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    div:nth-child(1) {
      display: none;
    }
  }
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
// Icons Style

const icons = css`
  color: var(--black);
  font-size: 2rem;
`

export const Cart = styled(MdShoppingCart)`
  ${icons}
`
export const User = styled(VscAccount)`
  ${icons}
  margin-right: 10px;
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;

  margin: 0 10px;

  span {
    font-size: 15px;
    color: var(--grayLight);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

// End Icons Style

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
`

export const ProductNumber = styled.div`
  background-color: var(--alertColor);

  border-radius: 50%;

  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 0.8rem;
    color: var(--white);

    font-weight: 700;
  }
`

// Search Component

const Search = css`
  width: 100%;
  padding: 1rem 0;

  border: 0;
  border-bottom: 1px solid var(--grayLight);
  outline: none;

  @media (min-width: 768px) {
    width: 70%;
    max-width: 1200px;
    margin: 0 20px;
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
