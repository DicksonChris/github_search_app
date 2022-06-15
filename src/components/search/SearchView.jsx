import { parseLinkHeader } from '@web3-storage/parse-link-header'
import { useContext, useEffect } from 'react'
import Error from '../../components/layout/Error'
import Pagination from '../../components/layout/Pagination'
import { PageContext, useSetResultsLoading } from '../../context/PageContext'
import { useSearchUsers } from '../../hooks/useGetFromGithub'
import SearchResults from './SearchResults'

const SearchView = ({ searchQuery, pageNumber }) => {
  const {
    setPageNumber,
    setReposPageNumber,
    setUserRepos,
    searchResults,
    searchPaginationState,
  } = useContext(PageContext)
  // Reset repos page number when navigation between users
  useEffect(() => {
    setReposPageNumber(1)
    setUserRepos([])
  }, [])

  // params needed to get users from github api
  const params = {
    params: {
      q: searchQuery,
      per_page: 24,
      page: pageNumber,
    },
  }

  const { data, error, loading } = useSearchUsers(params)

  // Changes search results loading state in context
  useSetResultsLoading(loading)
  // Handles component display state
  if (loading) {
    return searchResults ? (
      <>
        <Pagination {...searchPaginationState} />
        <SearchResults users={searchResults} />
      </>
    ) : (
      // Loading indicated in context and used in search submit button rather than here
      <span className='sr-only'>Loading...</span>
    )
  }
  if (error) {
    return <Error error={error} />
  }
  const users = data.data.items
  const headers = data.headers
  // check if headers has link, if so then show pagination
  const hasPagination = headers.link ? true : false
  const linkHeader = parseLinkHeader(headers.link)

  return (
    <>
      {hasPagination && (
        <Pagination
          link={linkHeader}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          component='search'
        />
      )}
      <SearchResults users={users} />
      {hasPagination && (
        <Pagination
          link={linkHeader}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          component='search'
        />
      )}
    </>
  )
}
export default SearchView
