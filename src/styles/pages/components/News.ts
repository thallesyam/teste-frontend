import styled from 'styled-components'

export const NewsContainer = styled.div`
  margin: 3rem 0;
  width: 100%;
  background-color: #f2f2f2;

  padding: 2rem 1rem;
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

    div {
      width: 100%;
    }

    input {
      width: 100%;
      height: 48px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #000;
      padding: 0 1rem;

      outline: #000;
    }
  }

  button {
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

export const SuccesButton = styled.button`
  width: 200px;
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
