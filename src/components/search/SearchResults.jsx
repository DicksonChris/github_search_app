import Error from '../../components/layout/Error'
import { useSetResultsLoading } from '../../context/PageContext'
import { useSearchUsers } from '../../hooks/useGetFromGithub'
import Loading from '../layout/Loading'
import SearchCard from './SearchCard'

const SearchResults = ({searchQuery}) => {
  // params needed to get users from github api
  const params = {
    params: {
      q: searchQuery,
      per_page: 24,
    },
  }
  
  const { data, error, loading } = useSearchUsers(params)
  
  // Changes search results loading state in context
  useSetResultsLoading(loading)
  // Handles component display state
  if (loading) {
    return <></>
  }
  if (error) {
    return <Error error={error} />
  }
  const users = data.data.items 

  const userList = users.map((user) => {
    // Iterate over users and return a SearchCard for each user
    return (
      <SearchCard
        key={user.id}
        avatar={user.avatar_url}
        username={user.login}
        admin={user.site_admin}
      />
    )
  })
  // List Container
  return (
    <div className='container max-w-[96%] mt-2 grid mx-2 sm:mx-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-8 gap-4 md:gap-6 md:gap-y-12'>
      {userList}
    </div>
  )
}

export default SearchResults
