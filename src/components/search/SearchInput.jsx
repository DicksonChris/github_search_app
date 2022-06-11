import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchParams } from 'react-router-dom'
import { searchUsers } from '../../shared/GitHubActions'
import Alert from './Alert'
import timeout from './utils/timeout'
import { useNavigate } from 'react-router-dom'

// if param in url setText to that string
const SearchInput = () => {
  // Used for navigating to home page when search is cleared
  const navigate = useNavigate()

  // Handles query params
  const PARAMS = { SEARCH: 'search' }
  const [searchParams, setSearchParams] = useSearchParams()
  const params = { search: searchParams.get(PARAMS.SEARCH) }
  // Handles invalid input alert
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setLoading] = useState(false)

  // Input text for searching users
  const [text, setText] = useState('')

  // Use for defocus on submit
  const ref = useRef()

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Check if input is empty and previous search results show
    if (text.length === 0) {
      navigate('/')
    }

    // Check if input is empty
    if (timeout(text, setShowAlert)) {
      return
    }

    setLoading(true)

    // Search users
    const users = await searchUsers(text)
    // TODO: if needed set users in context

    // Clear input text after search is complete and reset loading state
    setLoading(false)
    ref.current.blur()

    // Handles the query params
    setSearchParams({ search: text })
  }

  useEffect(() => {
    const fetchSearch = async () => {
      if (params.search) {
        setLoading(true)

        // Search users
        const users = await searchUsers(params.search)
        // TODO: if needed set users in context

        // Clear input text after search is complete and reset loading state
        setLoading(false)
        ref.current.blur()
      }
    }
    fetchSearch()
  }, [params.search])

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
