import styled from 'styled-components'

export const ServicesStyled = styled.div`
  p {
    position: relative;
    left: 27rem;
    text-align: center;
    max-width: 30rem;
    span {
      color: #875afd;
    }
  }
`

export const Cards = styled.div`
  padding: 3rem 10rem;
  text-align: center;
  display: flex;
  gap: 2rem;
  align-items: center;
`

export const Card = styled.div`
  max-width: 20rem;
  display: inline-block;
  padding: 3.625rem 2rem;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.25rem solid #875afd;
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;

  p {
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Icon = styled.div`
  img {
    width: 20%;
    height: 20%;
  }
`
