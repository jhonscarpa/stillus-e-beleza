import { About } from './pages/about'
import { Home } from './pages/home/index'
import GlobalStyle, { Divider1, Divider2 } from './styles/styles'

function App() {
  return (
    <>
      <Home />
      <Divider1 />
      <About />
      <Divider2 />
      <GlobalStyle />
    </>
  )
}

export default App
