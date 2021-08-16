import React from 'react'
import { Container, Section, Title } from '../../styles/styles'
import { Card, Cards, Icon, ServicesStyled } from './styles'
import cosmetic from '../../assets/icon/cosmetic.svg'
import trim from '../../assets/icon/trim.svg'
import woman from '../../assets/icon/woman.svg'

export function Services() {
  return (
    <Container>
      <Section id="services">
        <ServicesStyled>
          <Title>Serviços</Title>
          <p>
            Com mais de 10 anos no mercado, o <span>Stillos&amp;Beleza</span> já
            conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
          <Cards>
            <Card>
              <Icon>
                <img src={trim} alt="cosmetic" />
              </Icon>
              <Title>Cortes</Title>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                ex, quo accusamus distinctio provident alias, minus omnis
                reprehenderit temporibus quia officia. Animi fuga, eius ipsa
                omnis architecto hic natus alias?
              </p>
            </Card>
            <Card>
              <Icon>
                <img src={cosmetic} alt="cosmetic" />
              </Icon>
              <Title>Tratamentos</Title>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                ex, quo accusamus distinctio provident alias, minus omnis
                reprehenderit temporibus quia officia. Animi fuga, eius ipsa
                omnis architecto hic natus alias?
              </p>
            </Card>
            <Card>
              <Icon>
                <img src={woman} alt="cosmetic" />
              </Icon>
              <Title>Terapia Capilar</Title>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                ex, quo accusamus distinctio provident alias, minus omnis
                reprehenderit temporibus quia officia. Animi fuga, eius ipsa
                omnis architecto hic natus alias?
              </p>
            </Card>
          </Cards>
        </ServicesStyled>
      </Section>
    </Container>
  )
}
