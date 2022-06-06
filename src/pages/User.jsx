import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserCard from '../components/user/UserCard'
import UserReposCard from '../components/user/UserReposCard'
import { getUserAndRepos } from '../shared/GitHubActions'
// import Loading from '../components/layout/Loading'

//https://api.github.com/users/<login>

function User() {
  // <Route path='/user/:login' element={<User />} />
  const { login } = useParams()
  const [user, setUser] = useState()
  const [repos, setRepos] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserAndRepos(login)

      setUser(response.user)
      setRepos(response.repos)
    }
    fetchData()
  }, [])

  // display user info

  // const {
  //   name,
  //   type,
  //   avatar_url,
  //   location,
  //   bio,
  //   blog,
  //   twitter_username,
  //   login,
  //   html_url,
  //   followers,
  //   following,
  //   public_repos,
  //   public_gists,
  //   hireable,
  // } = user

  // NOTE: check for valid url to users website

  // const websiteUrl = blog?.startsWith('http') ? blog : 'https://' + blog

  return (
    <div className='container mx-auto'>
      <Link to='/' className='btn '>
        Back To Search
      </Link>
      <UserCard user={user} />
      <UserReposCard repos={repos} />

      {/* <a
        href={html_url}
        target='_blank'
        rel='noreferrer'
        className='btn btn-outline'
      >
        Visit Github Profile
      </a>{' '}
      <div className='stat-title text-md'>Website</div>
      <div className='text-lg stat-value'>
        <a href={websiteUrl} target='_blank' rel='noreferrer'>
          {websiteUrl}
        </a>
      </div>
      <div className='stat-title text-md'>Twitter</div>
      <div className='text-lg stat-value'>
        <a
          href={`https://twitter.com/${twitter_username}`}
          target='_blank'
          rel='noreferrer'
        >
          {twitter_username}
        </a>
      </div> */}
      {/* Repos component */}
    </div>
  )
}

export default User
