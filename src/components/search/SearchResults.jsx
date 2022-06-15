import { useContext, useEffect } from 'react'
import { PageContext } from '../../context/PageContext'
import SearchCard from './SearchCard'

const SearchResults = ({ users }) => {
  const { setSearchResults } = useContext(PageContext)

  useEffect(() => {
    setSearchResults(users)
  })
  return (
    <>
      <div className='container max-w-[96%] grid mx-2 sm:mx-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-1 mb-16 gap-4 md:gap-6 md:gap-y-12'>
        {
          // Iterate over users and return a SearchCard for each user
          users.map((user) => (
            <SearchCard
              key={user.id}
              avatar={user.avatar_url}
              username={user.login}
              admin={user.site_admin}
            />
          ))
        }
      </div>
    </>
  )
}

export default SearchResults
