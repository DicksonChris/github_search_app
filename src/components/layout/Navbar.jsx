import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai'

function Navbar({ title }) {
  return (
    <nav className='navbar'>
      <div className='container mx-auto'>
        <div className='flex '>
          <Link to='/' className='h-20'>
            <AiFillGithub className='inline-block object-fill h-16 w-24 ' />
            {title}
          </Link>
        </div>

        <div className='flex ml-auto justify-end'>
          <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'My Github App',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
