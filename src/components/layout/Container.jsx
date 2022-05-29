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

  return (
    <>
      <div ref={navbarRef} className='wrapper'>
        <Navbar />
      </div>
      <div className='container mx-auto' style={{ minHeight: `calc(100vh - ${navbarHeight}px - ${footerHeight}px)` }} >{children}</div>
      <div ref={footerRef} className='wrapper'>
        <Footer />
      </div>
    </>
  )
}

export default Container

// import {useEffect, useState, useRef} from 'react';

// export default function App() {
// const [divHeight, setDivHeight] = useState(0)

// const ref = useRef(null)

// useEffect(() => {
//   setDivHeight(ref.current.clientHeight)
//   console.log('height: ', ref.current.clientHeight)

//   console.log('width: ', ref.current.clientWidth)
// }, [])

//   return (
//     <div ref={ref}>
//       <h2>Some</h2>
//       <h2>Content</h2>
//       <h2>{divHeight}</h2>
//     </div>
//   );
// }
