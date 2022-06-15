import { useContext, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { PageContext } from '../../context/PageContext'
import Alert from './Alert'
import timedConditionalCallback from './utils/timedConditionalCallback'
import validateUsernameSearch from './utils/validateUsernameSearch'
import { SEARCH } from '../../constants'

// if param in url setText to that string
const SearchInput = () => {
  // Input text
  const [text, setText] = useState('')
  // Update input text state on change
  const handleChange = (event) => {
    const value = event.target.value
    setText(value)

    // Validate input text
    setShowAlert(validateUsernameSearch(value, setMessage))
  }

  // Needed to remove focus from input field on submit
  const ref = useRef()
  // Shows validation error message
  const [showAlert, setShowAlert] = useState(false)
  const [message, setMessage] = useState('')
  // Needed for navigating, used when submitting while search is cleared
  const navigate = useNavigate()
  // Needed to reset page number on submit
  const { setPageNumber } = useContext(PageContext)
  // Used to set search query in url
  const [searchParams, setSearchParams] = useSearchParams()
  // Called on submit, if valid input text, this set search query in url which will then display SearchResults
  const handleSubmit = async (event) => {
    event.preventDefault()
    // If input is empty then navigate to home page
    if (text.length === 0 && searchParams.has(SEARCH)) {
      navigate('/')
      return
    }

    // Check if input is empty
    if (timedConditionalCallback(text.length === 0, setShowAlert)) {
      setMessage('Enter a username')
      return
    }

    // Clear focus on input field
    ref.current.blur()
    // Handles the query params
    setSearchParams({ q: text })
    // Reset page number to 1
    setPageNumber(1)
  }

  // Get context for search results loading state
  const { searchResultsLoading } = useContext(PageContext)
  return (
    <div className='max-w-lg mt-3 md:mt-6 pb-10'>
      <Alert show={showAlert} message={message} />

      <form
        onSubmit={handleSubmit}
        className='input-group input-group-lg mx-2 sm:mx-1 max-w-[96%] '
      >
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
          className={`btn btn-square btn-lg 
            ${searchResultsLoading && 'loading'} 
            ${!showAlert && text ? 'btn-primary' : 'btn-disabled'}
          `}
        >
          {!searchResultsLoading && <AiOutlineSearch />}
        </button>
      </form>
    </div>
  )
}

export default SearchInput
