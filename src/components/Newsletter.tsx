import React, { useState } from 'react'
import axios from 'axios'


import {
  NewsContainer,
  SuccesButton,
  SuccesMsg,
  InputContainer,
  ButtonSend
} from '../styles/pages/components/News'


const Newsletter = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [validateEmailMessage, setValidateEmailMessage] = useState('')
  const [validateNameMessage, setValidateNameMessage] = useState('')
  const [borderName, setBorderName] = useState(false)
  const [borderEmail, setBorderEmail] = useState(false)
 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

    let setEmail
    let setname

    const data = {
      name,
      email
    }

    if(nameRegex.test(data.name)) {
      setBorderName(false)
      setValidateNameMessage('')
      setname= true

    }else {
      setname = false
      setValidateNameMessage('Preencha com seu nome completo')
      setBorderName(true)
    }

    if(emailRegex.test(data.email)) {
      setBorderEmail(false)
      setValidateEmailMessage('')
      setEmail = true
    } else {
      setEmail = false
      setValidateEmailMessage('Preencha com um e-mail válido')
      setBorderEmail(true)
    }

    if(setname && setEmail) {
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
