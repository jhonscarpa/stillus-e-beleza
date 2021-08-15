import React from 'react'
import homeImg from '../../assets/homeImg.jpg'
import { Headers } from '../../components/Header'
import { Button, HomeStyle, Image, Text } from './styles'
import { Title, Container, Section } from '../../styles/styles'

export function Home() {
  return (
    <Container>
      <Headers />

      <Section>
        <HomeStyle>
          <Image>
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
