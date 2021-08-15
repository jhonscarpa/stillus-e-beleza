import styled from 'styled-components'

export const Menu = styled.div`
  position: fixed;
  display: flex;

  ul {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    padding-left: 46rem;
    padding-right: 1.5rem;

    a {
      font: 700 1rem 'Poppins', sans-serif;
      text-align: center;
      color: #875afd;
      -webkit-font-smoothing: auto;
      margin-bottom: 1rem;
    }
  }
`

export const LogoTop = styled.a`
  font: 700 1.31rem 'Poppins', sans-serif;
  color: #120310;
  padding-left: 1.5rem;

  span {
    color: #875afd;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  ul li a {
    color: black;
    transition: color 0.3s;

    :hover {
      color: #875afd;
    }
  }
`

export const Header = styled.header`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;

  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: hsl(0 0% 98%);
`
