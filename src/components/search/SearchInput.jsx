import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Alert from './Alert'
import { searchUsers } from './SearchActions'
import timeout from './utils/timeout'
import DispatchActions from '../../context/constants'
import GithubContext from '../../context/GithubContext'
import { useRef } from 'react'

const SearchInput = () => {
  // Handles invalid input alert
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setLoading] = useState(false)

  // Input text for searching users
  const [text, setText] = useState('')

  const { dispatch } = useContext(GithubContext)
  
  const clearUsers = () => {
    dispatch({ type: DispatchActions.CLEAR_USERS })
  }

  // Use for defocus on submit
  const ref = useRef()

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Check if input is empty and previous search results show
    if (text.length === 0) {
      clearUsers()
    }

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
    ref.current.blur()
  }

  return (
    <div className='max-w-lg mt-3'>
      <Alert show={showAlert} />

      <form onSubmit={handleSubmit} className='input-group input-group-lg'>
        <input
          className='input-border-radius input input-bordered input-lg w-full max-w-md text-base-content bg-base-300 focus:outline-none focus:bg-slate-100 focus:placeholder-transparent focus:text-base-300 px-4'
          onChange={handleChange}
          name='search'
          type='text'
          value={text}
          placeholder='Search users...'
          autoComplete='off'
          ref={ref}
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
