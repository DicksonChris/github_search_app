import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/layout/Container'
import { GithubProvider } from './context/GithubContext'
import About from './pages/About'
import Home from './pages/Home'
// import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <GithubProvider>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </GithubProvider>
    </Router>
  )
}

export default App

const User = () => {
  return <>User</>
}
