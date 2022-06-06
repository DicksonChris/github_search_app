import PropTypes from 'prop-types'
import { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams } from 'react-router-dom'
import DispatchActions from '../../context/constants'
import GithubContext from '../../context/GithubContext'
import Alert from './Alert'
import { searchUsers } from '../../shared/GitHubActions'
import timeout from './utils/timeout'

// if param in url setText to that string
const SearchInput = () => {
  // Handles query params
  const PARAMS = { SEARCH: 'search' }
  const [searchParams, setSearchParams] = useSearchParams()
  const params = { search: searchParams.get(PARAMS.SEARCH) }
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

    // Handles the query params
    setSearchParams({ search: text })
  }

  useEffect(() => {
    const fetchSearch = async () => {
      if (params.search) {
        console.log('search:', params.search)
        setLoading(true)

        // Search users
        const users = await searchUsers(params.search)
        dispatch({ type: DispatchActions.GET_USERS, payload: users })

        // Clear input text after search is complete and reset loading state
        setLoading(false)
        ref.current.blur()
      }
    }
    fetchSearch()
  }, [dispatch, params.search])

  return (
    <div className='max-w-lg mt-3'>
      <Alert show={showAlert} />

      <form onSubmit={handleSubmit} className='input-group input-group-lg mx-2 sm:mx-1 max-w-[96%] '>
        <input
          className='input-border-radius input input-bordered input-lg w-full text-base-content bg-base-300 focus:outline-none focus:bg-slate-100 focus:placeholder-transparent focus:text-base-300 px-4'
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
  seach: PropTypes.string,
}

export default SearchInput
