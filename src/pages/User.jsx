import { Link, useParams } from 'react-router-dom'
import UserCard from '../components/user/UserCard'
import UserReposCard from '../components/user/UserReposCard'
import { useGetUserAndRepos } from '../hooks/useGetFromGithub'
import { useNavigate } from 'react-router-dom'

//https://api.github.com/users/<login>

function User() {
  const { login } = useParams()
  const navigate = useNavigate()

  // Get users from context
  // const [user, setUser] = useState({})
  // const [repos, setRepos] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState('')

  // useEffect(() => {
  //   getUserAndRepos(login)
  //     .then(({ user, repos }) => {
  //       setUser(user)
  //       setRepos(repos)
  //       setLoading(false)
  //     }
  //     )
  //     .catch(err => {
  //       setError(err.message)
  //       setLoading(false)
  //     }
  //     )
  // }, [login])

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

  const { user, repos } = useGetUserAndRepos(login)

  return (
    <div className='container mx-auto'>
      <button className='btn mt-3 mb-4' onClick={() => navigate(-1)}>
        Back To Search
      </button>
      <UserCard
        user={user?.data?.data}
        loading={user.loading}
        error={user.error}
      />
      <br />
      <UserReposCard
        repos={repos?.data?.data}
        loading={repos.loading}
        error={repos.error}
      />

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
