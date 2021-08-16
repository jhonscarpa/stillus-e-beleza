import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: auto;
  }
  
`
export const Title = styled.h1`
  font: 700 1.875rem 'Poppins', sans-serif;
  text-align: center;
  color: #875afd;
  -webkit-font-smoothing: auto;
  margin-bottom: 1rem;
`

export const Container = styled.div`
  font: 400 1rem 'DM Sans';
  background: white;
  color: #454444;
  -webkit-font-smoothing: antialiased;
`
export const Section = styled.section`
  padding: 5rem 0;
`

export const Divider1 = styled.div`
  height: 1px;
  background: linear-gradient(270deg, #875afd, white);
`
export const Divider2 = styled.div`
  height: 1px;
  background: linear-gradient(270deg, white, #875afd);
`
