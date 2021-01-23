import styled from 'styled-components'

export const ProductsContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 50vh;
`
export const SaleCall = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;

  > h1 {
    font-size: 20px;
    font-weight: 900;
    position: relative;

    &:after {
      content: '';
      width: 15%;
      height: 5px;
      background-color: #c0c0c0;
      position: absolute;
      left: 0;
      top: 25px;
    }
  }
`
export const Showcase = styled.div`
  width: 100%;
  height: 10vh;
  padding: 0.5rem;
`

export const Product = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  max-height: 350px;
`
