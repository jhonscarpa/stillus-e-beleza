import React, { useState } from 'react'
import homeImg from '../../assets/homeImg.jpg'
import { Container, Nav, Title, Section } from './styles'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <Container>
      <header id="header">
        <Nav className="box">
          <a className="logo" href="#">
            Stillus&amp;<span>Beleza</span>
          </a>
          {showMenu ? (
            <AiOutlineClose
              className="icon"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <AiOutlineMenu className="icon" onClick={() => setShowMenu(true)} />
          )}

          {showMenu && (
            <div className="menu">
              <ul className="grid">
                <li>
                  <a className="title" href="#home">
                    Início
                  </a>
                </li>
                <li>
                  <a className="title" href="#about">
                    sobre
                  </a>
                </li>
                <li>
                  <a className="title" href="#services">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="title" href="#galery">
                    Galeria
                  </a>
                </li>
                <li>
                  <a className="title" href="#scheduling">
                    Agendamento
                  </a>
                </li>
                <li>
                  <a className="title" href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          )}
        </Nav>
      </header>

      <Section id="home">
        <div className="box grid">
          <div className="image">
            <img src={homeImg} alt="cabelo preto" />
          </div>

          <div className="text">
            <Title> Saúde natural para os seus cabelos</Title>
            <p>
              Um salão exclusivo em São Paulo, especializado em tratamentos
              naturais.
            </p>
            <a href="#" className="button">
              Agendar um horário
            </a>
          </div>
        </div>
      </Section>

      <Section id="about">
        <div className="box">
          <Title>Sobre</Title>
        </div>
      </Section>
    </Container>
  )
}
