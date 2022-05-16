import Zen from './Zen'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer footer-center bg-base-300 text-base-content'>
      <Zen />
      <p className='mb-1'>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer
