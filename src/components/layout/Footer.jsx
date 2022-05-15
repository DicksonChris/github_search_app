import Zen from './Zen'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer footer-center min-h-[5rem]'>
      <Zen />

      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer
