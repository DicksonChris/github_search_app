import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

/**
 * Wraps app pages, handles header, footer, and page height. 
 * Ensures the footer is at the bottom of the page by adding a min-height to the main content.
 * @props { node }  children  Child components
 */
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

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Container