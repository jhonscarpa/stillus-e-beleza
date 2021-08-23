import React from 'react'
import homeImg from '../../assets/homeImg.jpg'
import { Headers } from '../../components/Header'
import { HomeStyle, Image, Text } from './styles'
import { Title, Container, Section, Button } from '../../styles/styles'
import ScrollReveal from 'scrollreveal'

export function Home() {
  // const scrollReveal = ScrollReveal({
  //   origin: 'top',
  //   distance: '5px',
  //   duration: 700,
  //   reset: true,
  // })

  // scrollReveal.reveal(`#home ${Image}, ${Text}`, { interval: 100 })

  return (
    <Container>
      <Headers />

      <Section id="home">
        <HomeStyle>
          <Image className="image">
            <img src={homeImg} alt="cabelo preto" />
          </Image>

          <Text>
            <Title> Saúde natural para os seus cabelos</Title>
            <p>
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais.
            </p>
            <Button href="#" className="button">
              Agendar um horário
            </Button>
          </Text>
        </HomeStyle>
      </Section>
    </Container>
  )
}
