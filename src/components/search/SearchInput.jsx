import PropTypes from 'prop-types'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Alert from './Alert'
import { searchUsers } from './SearchActions'

const SearchInput = ({ loading: isLoading }) => {
  // Input text for searching users
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }

  // Handles invalid input alert
  const [showAlert, setShowAlert] = useState(false)
  const [users, setUsers] = useState({})

  // Handles user submit
  const handleSubmit = (event) => {
    event.preventDefault()
    // if input is empty show alert for 5000ms
    if (text === '') {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000)
    } else {
      // search github api for users with input text
      console.log(searchUsers(text))
    }
  }

  return (
    <div className='max-w-lg'>
      <Alert className='' show={showAlert} />

      <div className='input-group input-group-lg'>
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
          onSubmit={handleSubmit}
          type='submit'
          className={`btn btn-square btn-primary btn-lg ${
            isLoading && 'loading'
          }`}
        >
          {!isLoading && <AiOutlineSearch />}
        </button>
      </div>
      {/* radio buttons to sort alphabetically or popularity */}
      {/* <labal htmlFor='sort-alphabetically'>
          <input
            type='radio'
            id='sort-alphabetically'
            name='sort'
            value='alphabetically'
          />
          Sort alphabetically
        </labal>
        <labal htmlFor='sort-popularity'>
          <input
            type='radio'
            id='sort-popularity'
            name='sort'
            value='popularity'
          />
          Sort by popularity
        </labal> */}
    </div>
  )
}

SearchInput.propTypes = {
  loading: PropTypes.bool,
}

export default SearchInput
