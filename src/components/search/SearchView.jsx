import Error from '../../components/layout/Error'
import { useSetResultsLoading } from '../../context/PageContext'
import { useSearchUsers } from '../../hooks/useGetFromGithub'
import SearchResults from './SearchResults'
import { parseLinkHeader } from '@web3-storage/parse-link-header'
import Pagination from './Pagination'

const SearchView = ({ searchQuery, pageNumber }) => {
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
    // Loading indicated in context and used in search submit button rather than here
    return <span className='sr-only'>Loading...</span>
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
      {hasPagination && <Pagination link={linkHeader} />}
      <SearchResults users={users} />
    </>
  )
}
export default SearchView
