import React from 'react'
import { LogoTop, Menu, Nav, Header } from './styled'

export function Headers() {
  return (
    <>
      <Header>
        <Nav>
          <LogoTop href="#">
            Stillus&amp;<span>Beleza</span>
          </LogoTop>
          <Menu>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">sobre</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#galery">Galeria</a>
              </li>
              <li>
                <a href="#scheduling">Agendamento</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </Menu>
        </Nav>
      </Header>
    </>
  )
}
