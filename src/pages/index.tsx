import React from 'react'

import { Container } from '../styles/pages/Home'

import Header from '../components/Header'
import Slider from '../components/Slider'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />
      <Slider />
    </Container>
  )
}
