import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Gallery } from './pages/gallery'
import { Home } from './pages/home/index'
import { Services } from './pages/services'
import GlobalStyle, { Divider1, Divider2 } from './styles/styles'

function App() {
  return (
    <>
      <Home />
      <Divider1 />
      <About />
      <Divider2 />
      <Services />
      <Divider1 />
      <Gallery />
      <Divider2 />
      <Contact />
      <GlobalStyle />
    </>
  )
}

export default App
