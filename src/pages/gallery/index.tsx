import React from 'react'
import { Container, Section, Title } from '../../styles/styles'
import { GalleryStyled } from './styles'

export function Gallery() {
  return (
    <Container>
      <Section id="gallery">
        <GalleryStyled>
          <Title>Galeria</Title>

          <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          <iframe
            src="//lightwidget.com/widgets/ae95d77afb545d60b8c1b24b3c7261cd.html"
            scrolling="no"
            className="lightwidget-widget"
          ></iframe>
        </GalleryStyled>
      </Section>
    </Container>
  )
}
