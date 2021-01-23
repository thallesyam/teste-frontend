import React from 'react'
import Link from 'next/link'

import {
  FooterContainer,
  InfoContainer,
  ButtonsContainer,
  LogoContainer,
  FooterContent,
  Support,
  Email
} from '../styles/pages/components/Footer'

import CorebizFooter from '../assets/corebizFooter.png'
import VtexFooter from '../assets/vtexFooter.png'

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterContent>
        <InfoContainer>
          <h2>Localização</h2>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </InfoContainer>
        <ButtonsContainer>
          <Link href="">
            <a>
              <Email /> ENTRE EM CONTATO
            </a>
          </Link>
          <Link href="">
            <a>
              <Support /> FALE COM O NOSSO <br /> CONSULTOR ONLINE
            </a>
          </Link>
        </ButtonsContainer>
        <LogoContainer>
          <div>
            <span>Created by</span>
            <img src={CorebizFooter} alt="Corebiz logo footer" />
          </div>
          <div>
            <span>Powered by</span>
            <img src={VtexFooter} alt="Vtex logo footer" />
          </div>
        </LogoContainer>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
