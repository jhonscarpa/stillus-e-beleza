import styled from 'styled-components'
import { Icon } from '../../styles/styles'

export const FooterStyled = styled.footer`
  align-items: center;
  display: flex;
  padding-top: 5%;
  padding-bottom: 5%;
  background: #875afd;
  gap: 2rem;
`

export const LogoBottom = styled.a`
  font: 700 1.31rem 'Poppins', sans-serif;
  color: #120310;
  padding-left: 10rem;
  width: 100vh;
  p {
    font: 400 1rem 'DM Sans';
    color: white;
  }
  span {
    color: white;
  }
`

export const Icons = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  justify-content: flex-end;
  padding-right: 10rem;
  gap: 2rem;
`
export const IconFooter = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  /* width: 10%;
  height: 10%; */
  a {
    position: relative;
  }
  a:hover {
    top: -0.3rem;
  }
`
