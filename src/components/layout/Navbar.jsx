import PropTypes from 'prop-types'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Navbar({ title }) {

  const clearUsers = () => {
    // Clear users from context
  }

  return (
    <div className='bg-primary'>
      <div className='container mx-auto'>
        <nav className='navbar text-primary-content'>
          <div className='container mx-auto'>
            <div className='flex '>
              <Link
                to='/'
                className='flex items-center'
                onClick={() => {
                  // Clear search results
                  clearUsers()
                }}
              >
                <AiFillGithub className='h-12 w-12 mx-2' />
                <div className='inline-block'>
                  <span>
                    {title.split(' ')[0]}
                    <strong className='text-primary-content drop-shadow-md'>
                      {title.split(' ')[1]}
                    </strong>
                  </span>
                </div>
              </Link>
            </div>
            <div className='flex ml-auto justify-end'>
              <Link
                to='/'
                className='btn btn-ghost btn-sm rounded-btn'
                onClick={() => {
                  // Clear search results
                  clearUsers()
                }}
              >
                Home
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'GitHub Search',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
