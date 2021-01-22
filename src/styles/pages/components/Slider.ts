import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 100%;
  height: 520px;
  margin-top: 30px;
  background-color: var(--black);
  position: relative;
`

export const SliderComponent = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    position: absolute;
    left: 20%;
    z-index: 3;

    @media (max-width: 768px) {
      left: 5%;
    }
  }

  h1,
  h4 {
    color: var(--white);
  }

  h1 {
    font-size: 2.5rem;
    margin-top: 20px;
    font-weight: 900;
  }
  h4 {
    font-size: 2rem;
  }

  img {
    height: 520px;
    width: 100%;
  }

  div:nth-child(1) {
    position: relative;
    left: 5%;
    z-index: 2;

    @media (max-width: 768px) {
      display: none;
    }
  }

  div:nth-child(2) {
    @media (max-width: 768px) {
      width: 100%;
    }

    img {
      filter: brightness(50%);
    }
  }
`

export const ColumnSlide = styled.div`
  width: 50%;
`
export const Bullets = styled.div`
  height: 20px;
  width: 50px;
  position: absolute;
  bottom: 10px;
  margin: 0 auto;
  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--grayLight);
    cursor: pointer;
  }
`
