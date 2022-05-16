import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Alert from './Alert'
import { searchUsers } from './SearchActions'
import timeout from './utils/timeout'
import DispatchActions from '../../context/constants'
import GithubContext from '../../context/GithubContext'


const SearchInput = () => {
  // Handles invalid input alert
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setLoading] = useState(false)

  // Input text for searching users
  const [text, setText] = useState('')

  const { dispatch } = useContext(GithubContext)
  
  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Check if input is empty
    if (timeout(text, setShowAlert)) {
      return
    }
    
    setLoading(true)

    // Search users
    const users = await searchUsers(text)
    dispatch({ type: DispatchActions.GET_USERS, payload: users })

    // Clear input text after search is complete and reset loading state
    setLoading(false)
    setText('')
  }


  
  return (
    <div className='max-w-lg mt-3'>
      <Alert show={showAlert} />

      <form onSubmit={handleSubmit} className='input-group input-group-lg'>
        <input
          className='input-user-search'
          onChange={handleChange}
          name='search'
          type='text'
          value={text}
          placeholder='Search users...'
          autoComplete='off'
        />
        {/* Search Button, shows loading spinner when isLoading */}
        <button
          type='submit'
          className={`btn btn-square btn-primary btn-lg ${
            isLoading && 'loading'
          }`}
        >
          {!isLoading && <AiOutlineSearch />}
        </button>
      </form>
    </div>
  )
}

SearchInput.propTypes = {
  loading: PropTypes.bool,
}

export default SearchInput
