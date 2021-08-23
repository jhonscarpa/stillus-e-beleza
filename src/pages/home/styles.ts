import styled from 'styled-components'

export const HomeStyle = styled.div`
  display: relative;
`
export const Text = styled.div`
  position: absolute;
  justify-content: flex-start;
  text-align: center;
  padding-left: 3rem;
  top: 18rem;
  align-items: center;

  p {
    margin-bottom: 2rem;
    text-align: center;
    max-width: 40rem;
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
    left: 55%;
  }

  :before {
    content: '';
    height: 70%;
    width: 40%;
    background: #875afd;
    left: 59%;
    top: 13%;
    position: absolute;

    z-index: 0;
    border-radius: 4px;
  }
`
