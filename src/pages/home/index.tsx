import React, { useState } from 'react'
import homeImg from '../../assets/homeImg.jpg'
import Container from './styles'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export function Home() {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <Container>
      {showMenu ? (
        <AiOutlineClose className="icon" onClick={() => setShowMenu(false)} />
      ) : (
        <AiOutlineMenu className="icon" onClick={() => setShowMenu(true)} />
      )}

      <header id="header">
        <nav className="container">
          <a className="logo" href="#">
            Stillus&amp;<span>Beleza</span>.
          </a>
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
        </nav>
      </header>

      <div id="home">
        <div>
          <img src={homeImg} alt="cabelo preto" />
        </div>

        <div>
          <h1>Saúde natural para os seus cabelos</h1>
          <p>
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </p>
        </div>
      </div>
    </Container>
  )
}
