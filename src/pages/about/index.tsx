import React from 'react'
import { Container, Section, Title } from '../../styles/styles'
import { AboutStyle, Text, Image } from './styles'
import aboutImg from '../../assets/aboutImg.jpg'
import ScrollReveal from 'scrollreveal'

export function About() {
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
  })

  scrollReveal.reveal(` #about ${Text}, ${Image} `, { interval: 200 })
  return (
    <Container>
      <Section id="about">
        <AboutStyle>
          <Text>
            <Title>Sobre nós</Title>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              non veritatis? Numquam ab fugit voluptas consectetur error labore
              dolores quia? Eos iure cupiditate fugiat beatae, maiores delectus
              porro sunt nemo?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, reprehenderit consequatur. Quo cum doloremque debitis
              ratione maiores harum, ab reprehenderit quibusdam quam nemo rem
              provident explicabo culpa. Sit, quisquam sed.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              non veritatis? Numquam ab fugit voluptas consectetur error labore
              dolores quia? Eos iure cupiditate fugiat beatae, maiores delectus
              porro sunt nemo?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, reprehenderit consequatur. Quo cum doloremque debitis
              ratione maiores harum, ab reprehenderit quibusdam quam nemo rem
              provident explicabo culpa. Sit, quisquam sed.
            </p>
          </Text>
          <Image className="Image">
            <img src={aboutImg} alt="Mulher com cabelos cacheados" />
          </Image>
        </AboutStyle>
      </Section>
    </Container>
  )
}
