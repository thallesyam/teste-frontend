import styled from 'styled-components'

export const NewsContainer = styled.div`
  margin: 3rem 0 0;
  width: 100%;
  background-color: #f2f2f2;

  padding: 3rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #333;

    margin-bottom: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      width: 100%;
      height: 48px;
      margin-bottom: 5px;
      border-radius: 5px;

      padding: 0 1rem;

      outline: #000;
    }
  }

  @media (min-width: 768px) {
    flex-direction: column;

    form {
      display: flex;
      flex-direction: row;

      input {
        width: 280px;
        margin-right: 20px;
      }

      button {
        width: 140px;
      }
    }
  }
`

export const ButtonSend = styled.button`
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  font-size: 14px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`

export const SuccesButton = styled.button`
  width: 100%;
  max-width: 450px;
  height: 48px;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  font-size: 14px;
  font-weight: 700;

  &:hover {
    opacity: 0.8;
  }
`
export const SuccesMsg = styled.p`
  font-size: 17px;
  text-align: center;
`

export const InputContainer = styled.div`
  height: 90px;

  p {
    color: var(--alertColor);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`
