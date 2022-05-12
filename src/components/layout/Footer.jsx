function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer footer-center'>
       
        <p>Copyright &copy; {footerYear} All rights reserved</p>
 
    </footer>
  )
}

export default Footer
