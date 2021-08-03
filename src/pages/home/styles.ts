import styled from 'styled-components'

export const Title = styled.h1`
  font: 700 1.875rem 'Poppins', sans-serif;
  text-align: center;
  color: #875afd;
  -webkit-font-smoothing: auto;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  .menu {
    width: 100%;
    justify-content: center;
  }

  .logo {
    font: 700 1.31rem 'Poppins', sans-serif;
    color: #120310;

    & span {
      color: #875afd;
    }
  }

  ul li a {
    color: black;

    &:hover {
      transition: 0.3s;
      color: #875afd;
    }
  }
`

export const Container = styled.div`
  font: 400 1rem 'DM Sans';
  background: white;
  color: #454444;
  -webkit-font-smoothing: antialiased;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    width: 100% 0;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .grid {
    display: grid;
  }

  .box {
    width: 100%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  header {
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 2rem;
    display: flex;

    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: hsl(0 0% 98%);

    .icon {
      color: #875afd;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
    }
  }

  #home {
    img {
      border-radius: 4px;
      max-height: 25rem;
      margin: 0;
    }

    .button {
      font: 500 1rem 'DM Sans', sans-serif;
      background-color: #875afd;
      color: white;
      border-radius: 4px;

      display: flex;
      padding: 0.875rem 2rem 0.9375rem;
      width: 13.375rem;
      height: 3.5rem;
      left: 5.06rem;
      top: 31.812rem;
    }
  }
`

export const Section = styled.section`
  padding: 5rem 0;
`
