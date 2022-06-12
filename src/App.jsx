import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/layout/Container'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import PageContextProvider from './context/PageContext'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <PageContextProvider>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </PageContextProvider>
    </Router>
  )
}

export default App
