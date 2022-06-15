import SearchInput from '../components/search/SearchInput'
import SearchView from '../components/search/SearchView'
import { PageContext } from '../context/PageContext'
import { useSearchParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { SEARCH } from '../constants'

const Home = () => {
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const {
    pageNumber,
    setPageNumber,
    setReposPageNumber,
    setSearchResults,
    setSearchPaginationState,
    setReposPaginationState,
    setUserRepos,
  } = useContext(PageContext)

  useEffect(() => {
    if (searchParams.get(SEARCH)) {
      setSearchQuery(searchParams.get(SEARCH)) // search is a query param
      return
    }
    // Resets context
    setSearchQuery('')
    // Reset page numbers
    setPageNumber(1)
    setReposPageNumber(1)
    setSearchPaginationState({
      link: {},
      setPageNumber: () => {},
      pageNumber: 1,
      component: 'search',
    })
    setReposPaginationState({
      link: {},
      setPageNumber: () => {},
      pageNumber: 1,
      component: 'repos',
    })
    // Reset fetched data
    setSearchResults([])
    setUserRepos([])
  }, [searchParams, searchQuery])

  return (
    <div className='container mx-auto'>
      <SearchInput />
      {searchQuery && (
        <SearchView
          searchQuery={searchQuery}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          key={[searchQuery, pageNumber]}
        />
      )}
    </div>
  )
}

export default Home
