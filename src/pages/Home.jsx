import SearchInput from '../components/search/SearchInput'
import SearchView from '../components/search/SearchView'
import { PageContext } from '../context/PageContext'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { SEARCH } from '../constants'

const Home = () => {
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const { pageNumber, setPageNumber } = useContext(PageContext)

  useEffect(() => {
    if (searchParams.get(SEARCH)) {
      setSearchQuery(searchParams.get(SEARCH)) // search is a query param
      return
    }
    // Resets search query and page number when navigating to home page
    setSearchQuery('')
    setPageNumber(1)
  }, [searchParams, searchQuery])

  return (
    <div className='container mx-auto'>
      <SearchInput />
      {searchQuery && (
        <SearchView
          searchQuery={searchQuery}
          pageNumber={pageNumber}
          key={[searchQuery, pageNumber]}
        />
      )}
    </div>
  )
}

export default Home
