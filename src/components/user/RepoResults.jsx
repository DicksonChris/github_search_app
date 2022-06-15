import { useContext, useEffect } from 'react'
import { PageContext } from '../../context/PageContext'
import RepoCard from './RepoCard'

const RepoResults = ({ repos }) => {
  const { setUserRepos } = useContext(PageContext)

  useEffect(() => {
    setUserRepos(repos)
  })

  return (
    <>
      <div className='grid grid-cols-1 gap-4'>
        {
          // Iterate over repos and return a RepoCard for each repo
          repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))
        }
      </div>
    </>
  )
}

export default RepoResults
