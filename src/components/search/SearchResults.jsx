import { useContext } from 'react'
import GithubContext from '../../context/GithubContext'
import SearchCard from './SearchCard'

const SearchResults = () => {
  // Get users from context
  const { users } = useContext(GithubContext)

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
    <div className='container mx-auto mt-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-8 gap-7'>
      {userList}
    </div>
  )
}

export default SearchResults
