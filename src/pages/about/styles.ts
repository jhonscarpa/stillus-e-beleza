import styled from 'styled-components'

export const AboutStyle = styled.div`
  position: relative;
`
export const Text = styled.div`
  position: relative;
  text-align: center;
  top: 8rem;
  align-items: center;

  p {
    position: absolute;
    margin-bottom: 2rem;
    text-align: justify;
    max-width: 40rem;
    left: 37rem;
  }
`

export const Image = styled.div`
  overflow: hidden;
  padding-top: 5rem;

  img {
    border-radius: 4px;
    position: relative;
    width: 40%;
    height: 40%;
  }

  :before {
    content: '';
    height: 90%;
    width: 30%;
    background: #875afd;
    top: 20%;
    position: absolute;

    z-index: 0;
    border-radius: 4px;
  }
`
