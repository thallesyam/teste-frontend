import styled, { css } from 'styled-components'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import Carousel from 'react-elastic-carousel'

export const ProductsContainer = styled.section`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`
export const SaleCall = styled.div`
  padding: 2rem 1.5rem;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-left: 40px;
  }

  > h1 {
    font-size: 20px;
    font-weight: 900;
    position: relative;

    &:after {
      content: '';
      width: 100px;
      height: 5px;
      background-color: #c0c0c0;
      position: absolute;
      left: 0;
      top: 25px;
    }
  }
`

export const CarouselContainer = styled(Carousel)`
  padding: 0 20px;
`

export const Product = styled.div`
  background-color: white;
  width: 95%;
  max-width: 216px;
  height: 100%;
  min-height: 353px;
`
export const ProductImage = styled.div`
  position: relative;

  img:nth-child(1) {
    width: 200px;
  }
  img:nth-child(2) {
    height: 70px;
    position: absolute;
    top: 0;
    right: 0;
  }

  h2 {
    position: absolute;
    top: 15px;
    right: 7px;
    font-size: 16px;
    color: #fff;
    font-weight: 900;
  }
`
export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  transition: 0.2s;

  div {
    margin: 15px 0 20px;
  }
  p {
    font-size: 11px;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  h4 {
    font-size: 15px;
    font-weight: 400;
    color: #7a7a7a;
  }

  span {
    font-size: 11px;
    color: var(--grayLight);
    margin: 10px 0 0;
  }

  button {
    width: 100%;
    max-width: 132px;
    height: 32px;
    background-color: black;
    color: #fff;

    text-transform: uppercase;
    border-radius: 5px;
    border: 1px solid black;
    transition: 0.2s;

    cursor: pointer;
    margin: 10px 0 0;

    &:hover {
      opacity: 0.8;
    }
  }

  &:hover {
    background-color: var(--grayDark);
  }
`
const icon = css`
  font-size: 1rem;
  stroke: var(--alertColor);
  fill: var(--alertColor);
`

export const OutlineStar = styled(AiOutlineStar)`
  ${icon}
`
export const FillStar = styled(AiFillStar)`
  ${icon}
`
export const NotInstallments = styled.span`
  height: 1px;

  @media (min-width: 768px) {
    height: 12px;
  }
`
