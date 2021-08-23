import React from 'react'

import { FooterStyled, IconFooter, LogoBottom, Icons } from './styles'
import facebook from '../../assets/icon/facebook.svg'
import instagram from '../../assets/icon/instagram.svg'

export function Footer() {
  return (
    <FooterStyled>
      <LogoBottom href="#">
        Stillus&amp;<span>Beleza</span>
        <p>Stillus &amp; Beleza 2021</p>
        <p>Todos os direitos reservados</p>
      </LogoBottom>
      <Icons>
        <IconFooter>
          <a
            href="https://www.facebook.com/stillusebeleza.com.br"
            target="_blank"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </IconFooter>
        <IconFooter>
          <a
            href="https://www.instagram.com/vivianescarpapaulo/"
            target="_blank"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </IconFooter>
      </Icons>
    </FooterStyled>
  )
}
