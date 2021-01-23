import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

export const Bars = styled(FaBars)`
  color: var(--black);
  font-size: 2rem;
  width: 2em;

  @media (min-width: 768px) {
    display: none;
  }
`
export const Close = styled(AiOutlineClose)`
  color: var(--white);
  font-size: 2rem;
  width: 2em;

  @media (min-width: 768px) {
    display: none;
  }
`
export const BarMobile = styled.div`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  background-color: var(--black);
  width: 250px;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  z-index: 999;

  padding: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`

export const LinkMenu = styled(Link)``

export const ListContainer = styled.ul`
  width: 100%;
`

export const ItemToggle = styled.ul`
  background-color: var(--black);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const ItemNavbar = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0 8px 16px;
  list-style: none;
  height: 60px;

  a {
    text-decoration: none;
    color: var(--white);
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover {
      background-color: var(--white);
      color: var(--black);
    }
  }
`
