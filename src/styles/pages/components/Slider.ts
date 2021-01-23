import styled from 'styled-components'

export const SliderContainer = styled.div`
  margin-top: 30px;
  position: relative;
`

export const SliderComponent = styled.div`
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  > div:nth-child(1) {
    position: relative;
    left: 90px;
    width: 53%;
    z-index: 2;

    @media (max-width: 768px) {
      display: none;
    }
  }

  > div:nth-child(2) {
    width: 60%;

    @media (max-width: 768px) {
      width: 100%;
    }

    img {
      filter: brightness(50%);
    }
  }
`

export const LeadOffert = styled.section`
  position: absolute;
  left: 25%;
  z-index: 3;

  h1,
  h4 {
    color: #fff;
  }

  h1 {
    font-weight: 900;
    font-size: 3rem;
    margin-top: 15px;
  }
  h4 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    left: 5%;
  }
`
export const ColumnSlide = styled.div`
  img {
    width: 100%;
    height: 430px;
  }
`

export const Bullets = styled.div`
  height: 20px;
  width: 100px;
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
