import { parseLinkHeader } from '@web3-storage/parse-link-header'
import { useContext } from 'react'
import Error from '../../components/layout/Error'
import Pagination from '../../components/layout/Pagination'
import { PageContext } from '../../context/PageContext'
import { useGetUserRepos } from '../../hooks/useGetFromGithub'
import Loading from '../layout/Loading'
import RepoResults from './RepoResults'

const UserReposCard = ({ login }) => {
  const {
    reposPageNumber,
    setReposPageNumber,
    userRepos,
    reposPaginationState,
  } = useContext(PageContext)
  const params = {
    params: {
      page: reposPageNumber,
      per_page: 10,
      sort: 'created',
      // direction: 'desc',
    },
  }

  const { data, error, loading } = useGetUserRepos(login, params)
  // Handles component display state
  if (loading) {
    // Prevents flashing while loading by showing previous results
    return userRepos ? (
      <>
        <Pagination {...reposPaginationState} />
        <RepoResults repos={userRepos} />
      </>
    ) : (
      <Loading />
    )
  }
  if (error) {
    return <Error error={error} />
  }
  const repos = data.data
  const headers = data.headers
  // check if headers has link, if so then show pagination
  const hasPagination = headers.link ? true : false
  const linkHeader = parseLinkHeader(headers.link)

  return (
    <div>
      {hasPagination && (
        <Pagination
          link={linkHeader}
          setPageNumber={setReposPageNumber}
          pageNumber={reposPageNumber}
          component={'repos'}
        />
      )}
      <RepoResults repos={repos} />
    </div>
  )
}
export default UserReposCard
