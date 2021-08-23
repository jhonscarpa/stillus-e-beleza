import styled from 'styled-components'
import { Button, Icon } from '../../styles/styles'

export const ContactStyled = styled.div`
  padding: 1.5rem;
  p {
    margin-bottom: 1rem;
  }
`
export const ButtonWpp = styled(Button)`
  gap: 1rem;
  img {
    width: 20%;
    height: 80%;
  }
`
export const InfoContact = styled.div`
  position: absolute;
  left: 60rem;
  width: 14%;
  height: 50%;
  /* text-align: center; */
`
export const IconContact = styled(Icon)`
  display: flex;
  gap: 1rem;
  img {
    width: 15%;
  }
`
