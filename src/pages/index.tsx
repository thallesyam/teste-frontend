import React from 'react'
import axios from 'axios'

// Style Home Container
import { Container } from '../styles/pages/Home'

// Style Showcase Component
import {
  ProductsContainer,
  SaleCall,
  CarouselContainer,
  Product,
  ProductImage,
  ProductDetail,
  OutlineStar,
  FillStar
} from '../styles/pages/components/Products'

// Components
import Header from '../components/Header'
import Slider from '../components/Slider'

// Interface
import { Products } from '../interface/Showcase'
import { formatValue } from '../utils/formatValue'

// Breakpoints carousel
const breakpoints = [
  { width: 768, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 }
]

export default function Home({ products }: Products): JSX.Element {
  return (
    <Container>
      <Header />
      <Slider />

      {/* ShowCase */}
      <ProductsContainer>
        <SaleCall>
          <h1>Mais Vendidos</h1>
        </SaleCall>
        <CarouselContainer breakPoints={breakpoints} isRTL={false}>
          {products.map((product, index) => {
            const arrayStars = []
            const installments = product.installments[0]

            for (let i = 0; i < 5; i++) {
              if (i <= product.stars) {
                arrayStars.push(true)
              } else {
                arrayStars.push(false)
              }
            }

            return (
              <Product key={index}>
                <ProductImage>
                  <img src={product.imageUrl} alt={product.productName} />
                </ProductImage>
                <ProductDetail>
                  <p>{product.productName}</p>
                  <div>
                    {product.stars &&
                      arrayStars.map((item, index) => {
                        if (item === true) {
                          return <FillStar key={index} />
                        } else {
                          return <OutlineStar key={index} />
                        }
                      })}
                  </div>
                  <h3>{`por R$ ${formatValue(product.price)}`}</h3>
                  {installments && (
                    <span>{`ou em ${installments.quantity} de R$ ${formatValue(
                      installments.value
                    )}`}</span>
                  )}

                  <button>comprar</button>
                </ProductDetail>
              </Product>
            )
          })}
        </CarouselContainer>
      </ProductsContainer>
      {/* End Showcase */}
    </Container>
  )
}

// In nextjs we can make calls to api only on pages and not on components
export const getStaticProps = async () => {
  const res = await axios.get(
    'https://corebiz-test.herokuapp.com/api/v1/products'
  )
  const products = await res.data

  return {
    props: {
      products
    }
  }
}
