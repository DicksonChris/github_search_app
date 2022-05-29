import { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Container = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)
  const navbarRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    setNavbarHeight(navbarRef.current.offsetHeight)
    setFooterHeight(footerRef.current.offsetHeight)
  }, [])

  const calcContentHeight = {
    minHeight: `calc(100vh - ${navbarHeight + footerHeight}px)`,
  }

  return (
    <div className=''>
      <span ref={navbarRef} className='wrapper'>
        <Navbar />
      </span>
      <div
        className='container mx-auto flex flex-col justify-center'
        style={calcContentHeight}
      >
        {children}
      </div>
      <span ref={footerRef} className='wrapper'>
        <Footer />
      </span>
    </div>
  )
}

export default Container