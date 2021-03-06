import React from 'react'

import {
  SliderContainer,
  Bullets,
  SliderComponent,
  LeadOffert,
  ColumnSlide
} from '../styles/pages/components/Slider'
import slider from '../assets/slider.png'
import bannerBlack from '../assets/bannerBlack.png'

export default function Slider(): JSX.Element {
  return (
    <>
      <SliderContainer>
        <SliderComponent>
          <ColumnSlide>
            <img src={bannerBlack} />
          </ColumnSlide>
          <ColumnSlide>
            <img src={slider} />
          </ColumnSlide>

          <LeadOffert>
            <h4>Olá, o que você está buscando?</h4>
            <h1>
              Criar ou migrar seu <br /> e-commerce?
            </h1>
          </LeadOffert>

          <Bullets>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Bullets>
        </SliderComponent>
      </SliderContainer>
    </>
  )
}
