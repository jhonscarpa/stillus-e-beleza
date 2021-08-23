import React from 'react'
import {
  Container,
  RowCenterLeft,
  RowCenterRight,
  Section,
  Title,
} from '../../styles/styles'
import { ContactStyled, ButtonWpp, InfoContact, IconContact } from './styles'

import whatsapp from '../../assets/icon/whatsapp.svg'
import mail from '../../assets/icon/mail.svg'
import map from '../../assets/icon/map.svg'
import phone from '../../assets/icon/phone.svg'

export function Contact() {
  return (
    <Container>
      <Section>
        <ContactStyled>
          <RowCenterLeft>
            <Title>Entre em contato com a gente!</Title>
            <p>
              Entre em contato com a Stillos&amp;Beleza, queremos tirar suas
              dúvidas, ouvir suas críticas e sugestões.
            </p>

            <ButtonWpp
              href=" https://api.whatsapp.com/send?phone=5512991115340&text=Olá%20gostaria%20de%20agendar%20um%20horário!"
              target="_blank"
            >
              <img src={whatsapp} alt="whatsapp" />
              Entrar em contato
            </ButtonWpp>
          </RowCenterLeft>
          <RowCenterRight>
            <InfoContact>
              <IconContact>
                <img src={phone} alt="telefone" />
                <p>(12) 99111-5340</p>
              </IconContact>
              <br />
              <IconContact>
                <img src={map} alt="Localização" />
                <p>R. Afonso Viêira da Fonseca N° 80</p>
              </IconContact>
              <br />
              <IconContact>
                <img src={mail} alt="E-Mail" />
                <p>scarpaviviane4@gmail.com</p>
              </IconContact>
            </InfoContact>
          </RowCenterRight>
        </ContactStyled>
      </Section>
    </Container>
  )
}
