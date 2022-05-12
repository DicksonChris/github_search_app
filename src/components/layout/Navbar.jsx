 import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className='navbar  '>
      <div className='container mx-auto'>
        <div className='flex-none '> 
          <Link to='/' className=' align-middle'>
            {title}
          </Link>
        </div>

        <div className='flex-1 '>
          <div className='flex '>
            <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link>
          </div>
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
