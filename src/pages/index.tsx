import React, { useContext } from 'react'
import { GetStaticProps } from 'next'
import axios, { AxiosResponse } from 'axios'

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
  FillStar,
  NotInstallments
} from '../styles/pages/components/Products'

// Components
import Header from '../components/Header'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

// Interface
import { Products, DetailsProduct } from '../interface/ShowcaseProps'

// utils
import { formatValue } from '../utils/formatValue'

// Images
import polygon from '../assets/polygon.png'

// Context
import { CountContext } from '../contexts/ProductsCount'

// Breakpoints carousel
const breakpoints = [
  { width: 768, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 }
]

export default function Home({ products }: Products): JSX.Element {
  const { handleCount } = useContext(CountContext)!

  function handleClick(): void {
    handleCount(null)
  }

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
                  {product.listPrice !== null ? (
                    <>
                      <img src={product.imageUrl} alt={product.productName} />
                      <img src={polygon} alt="polygon" />
                      <h2>OFF</h2>
                    </>
                  ) : (
                    <img src={product.imageUrl} alt={product.productName} />
                  )}
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

                  <h4>
                    {product.listPrice !== null ? (
                      `de R$ ${formatValue(product.listPrice)}`
                    ) : (
                      <span>
                        <br />
                      </span>
                    )}
                  </h4>

                  <h3>{`por R$ ${formatValue(product.price)}`}</h3>
                  {installments !== undefined ? (
                    <span>{`ou em ${installments.quantity} de R$ ${formatValue(
                      installments.value
                    )}`}</span>
                  ) : (
                    <NotInstallments></NotInstallments>
                  )}

                  <button onClick={handleClick}>comprar</button>
                </ProductDetail>
              </Product>
            )
          })}
        </CarouselContainer>
      </ProductsContainer>
      {/* End Showcase */}

      <Newsletter />
      <Footer />
    </Container>
  )
}

// In nextjs we can make calls to api only on pages and not on components
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    'https://corebiz-test.herokuapp.com/api/v1/products'
  )
  const products: AxiosResponse<Array<DetailsProduct>> = await res.data

  return {
    props: {
      products
    }
  }
}
