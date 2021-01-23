import styled, { css } from 'styled-components'
import { MdEmail } from 'react-icons/md'
import { ImHeadphones } from 'react-icons/im'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--black);

  display: flex;
  justify-content: center;
`
export const FooterContent = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  background-color: var(--black);

  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const InfoContainer = styled.div`
  width: 33.333%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  p,
  h2 {
    color: var(--white);
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
  }

  h2 {
    margin-bottom: 35px;
    font-size: 22px;
    font-weight: 700;
    position: relative;

    &:after {
      content: '';
      width: 50px;
      height: 5px;
      background-color: #fff;
      position: absolute;
      left: 0;
      top: 30px;
    }
  }
`

const icon = css`
  font-size: 2rem;
  color: var(--black);
`

export const Support = styled(ImHeadphones)`
  ${icon}
`
export const Email = styled(MdEmail)`
  ${icon}
`

export const ButtonsContainer = styled.div`
  width: 33.333%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 12px;

    text-align: center;

    border-radius: 5px;

    font-weight: 600;

    text-decoration: none;
    color: var(--black);

    width: 200px;
    padding: 10px 1rem;
    background-color: var(--white);

    &:hover {
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`
export const LogoContainer = styled.div`
  width: 33.333%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: var(--white);
      font-size: 13px;
      margin-bottom: 10px;
    }

    img {
      width: 100px;
    }
  }
`
