import React, { useState } from 'react'

import {
  NewsContainer,
  SuccesButton,
  SuccesMsg
} from '../styles/pages/components/News'
import axios from 'axios'

const Newsletter = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = {
      name,
      email
    }

    const res = axios.post(
      'https://corebiz-test.herokuapp.com/api/v1/newsletter',
      data
    )

    const {
      data: { message }
    } = await res

    if (message === 'Created successfully') {
      setSuccessMsg('Seu e-mail foi cadastrado com sucesso! ')
      setIsSuccess(true)
    }
  }

  return (
    <NewsContainer>
      {isSuccess === false ? (
        <>
          <h2>Participe de nossas news com promoções e novidades!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Digite seu nome"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
            <button type="submit">Eu quero!</button>
          </form>
        </>
      ) : (
        <>
          <SuccesMsg>
            <b>{successMsg}</b> <br /> A partir de agora você receberá as
            novidade e ofertas exclusivas.
          </SuccesMsg>
          <SuccesButton type="submit" onClick={() => setIsSuccess(false)}>
            Cadastrar novo e-mail
          </SuccesButton>
        </>
      )}
    </NewsContainer>
  )
}

export default Newsletter
