import React from 'react'

import { Container } from '../styles/pages/Home'

import Header from '../components/Header'
import Slider from '../components/Slider'
import Products from '../components/Products'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Slider />
      {/* <Products /> */}
    </Container>
  )
}
