import { useEffect } from 'react'
import { useState, createContext, useContext } from 'react'

export const PageContext = createContext()

const PageContextProvider = ({ children }) => {
  const [searchResultsLoading, setSearchResultsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [reposPageNumber, setReposPageNumber] = useState(1)
  const [userReposHavePagination, setUserReposHavePagination] = useState(false)
  const [userRepos, setUserRepos] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchPaginationState, setSearchPaginationState] = useState({
    link: {},
    setPageNumber: () => {},
    pageNumber: 1,
    component: 'search',
  })
  const [reposPaginationState, setReposPaginationState] = useState({
    link: {},
    setPageNumber: () => {},
    pageNumber: 1,
    component: 'repos',
  })

  return (
    <PageContext.Provider
      value={{
        searchResultsLoading,
        setSearchResultsLoading,
        pageNumber,
        setPageNumber,
        reposPageNumber,
        setReposPageNumber,
        userReposHavePagination,
        setUserReposHavePagination,
        userRepos,
        setUserRepos,
        reposPaginationState,
        setReposPaginationState,
        searchResults,
        setSearchResults,
        searchPaginationState,
        setSearchPaginationState,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const useSetResultsLoading = (loading) => {
  const { setSearchResultsLoading } = useContext(PageContext)
  // set loading to false
  useEffect(() => {
    setSearchResultsLoading(loading)
  }, [setSearchResultsLoading, loading])
}

export default PageContextProvider
