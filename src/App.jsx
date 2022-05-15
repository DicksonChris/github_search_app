import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
// import About from './pages/About'
// import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <main className='container main-container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:login' element={<User />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App

const User = () => {
  return <>User</>
}

const About = () => {
  return <>About</>
}
