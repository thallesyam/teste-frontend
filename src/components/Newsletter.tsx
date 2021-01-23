import React, { useState } from 'react'

import {
  NewsContainer,
  SuccesButton,
  SuccesMsg,
  InputContainer,
  ButtonSend
} from '../styles/pages/components/News'
import axios from 'axios'

const Newsletter = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [validateEmailMessage, setValidateEmailMessage] = useState('')
  const [validateEmail, setValidateEmail] = useState(false)
  const [validateNameMessage, setValidateNameMessage] = useState('')
  const [validateName, setValidateName] = useState(false)
  const [borderName, setBorderName] = useState(false)
  const [borderEmail, setBorderEmail] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/

    if (!regexEmail.test(email)) {
      setValidateEmailMessage('Preencha com um e-mail válido')
      setValidateEmail(false)
      setBorderEmail(true)
    } else {
      setValidateEmailMessage('')
      setValidateEmail(true)
      setBorderEmail(false)
    }

    if (!regexName.test(name)) {
      setValidateNameMessage('Preencha com seu nome completo')
      setValidateName(true)
      setBorderName(true)
    } else {
      setValidateNameMessage('')
      setValidateEmail(false)
      setBorderName(false)
    }

    if (validateName && validateEmail) {
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
  }

  return (
    <NewsContainer>
      {isSuccess === false ? (
        <>
          <h2>Participe de nossas news com promoções e novidades!</h2>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <input
                style={{
                  border: `${
                    borderName? '1px solid var(--alertColor)': '1px solid #BDBDBD'
                  }`
                }}
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Digite seu nome"
              />
              <p>{validateNameMessage}</p>
            </InputContainer>
            <InputContainer>
              <input
                style={{
                  border: `${
                    borderEmail? '1px solid var(--alertColor)': '1px solid #BDBDBD'
                  }`
                }}
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email"
              />
              <p>{validateEmailMessage}</p>
            </InputContainer>
            <InputContainer>
              <ButtonSend type="submit">Eu quero!</ButtonSend>
            </InputContainer>
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
