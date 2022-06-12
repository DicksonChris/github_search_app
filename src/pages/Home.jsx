import SearchInput from '../components/search/SearchInput'
import SearchResults from '../components/search/SearchResults'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchQuery(searchParams.get('search')) // search is a query param
      return
    }

    setSearchQuery('')
  }, [searchParams, searchQuery])

  return (
    <div className='container mx-auto'>
      <SearchInput />
      {searchQuery && (
        <SearchResults searchQuery={searchQuery} key={searchQuery} />
      )}
    </div>
  )
}

export default Home
