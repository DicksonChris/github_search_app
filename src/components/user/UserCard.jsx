import Loading from '../../components/layout/Loading'
import Error from '../../components/layout/Error'
import { FaTwitterSquare } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const UserCard = ({ user, loading, error }) => {
  if (error) {
    return <Error error={error} />
  }

  if (loading) {
    return <Loading />
  }

  const {
    avatar_url,
    bio,
    blog,
    company,
    email,
    followers,
    following,
    hireable,
    html_url,
    location,
    login,
    name,
    public_gists,
    public_repos,
    twitter_username,
    site_admin,
    created_at,
  } = user

  const joined = new Date(created_at).toLocaleDateString('en-US')

  return (
    <>
      <div className='grid sm:grid-cols-2 gap-8 max-w-screen-sm'>
        <div className='flex flex-col px-4 mt-4'>
          <img
            src={avatar_url}
            alt={`User avatar of ${name}`}
            className='rounded-sm mb-8'
          />
          {bio && (
            <>
              <h2 className='text-2xl font-bold mb-4 text-accent'>About</h2>
              <p
                className='text-xl'
                style={{ lineHeight: '1.6' }}
              >
                {bio}
              </p>
            </>
          )}
        </div>
        <div className='flex flex-col items-start'>
          {name && (
            <div className='flex mt-4 items-center'>
              <h1 className='text-4xl font-bold flex p-4 text-primary'>{name}</h1>
            </div>
          )}
          {(hireable || site_admin) && (
            <div className='flex px-4 pt-4 pb-2'>
              {hireable && (
                <div className='badge badge-accent badge-lg text-white mr-2'>
                  Hireable
                </div>
              )}
              {site_admin && (
                <div
                  style={{ backgroundColor: '#dc3545' }}
                  className='badge badge-lg text-white mr-2'
                >
                  Admin
                </div>
              )}
            </div>
          )}
          <div className='p-4 '>
            <p className='text-xl mb-1'>Joined: {joined}</p>
            {location && <p className='text-xl mb-1'>Location: {location}</p>}
            {company && <p className='text-xl mb-1'>Company: {company}</p>}
          </div>
          <div className='pl-4 pr-4 pb-4'>
            <p className='text-xl mb-1'>Followers: {followers}</p>
            <p className='text-xl mb-1'>Following: {following}</p>
            <p className='text-xl mb-1'>Public Repos: {public_repos}</p>
            <p className='text-xl mb-1'>Public Gists: {public_gists}</p>
          </div>
          <div className='pl-4 p4-4 pb-4'>
            <p className='link-secondary text-xl mb-1'>
              <a href={html_url}>github.com/{login}</a>
            </p>
            {blog && (
              <p className='link-secondary text-xl mb-1'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={`${blog.startsWith('http') ? blog : '//' + blog}`}
                >
                  {blog}
                </a>
              </p>
            )}
            {twitter_username && (
              <p className='link-secondary text-xl mb-1'>
                <a
                  className='flex items-center'
                  target='_blank'
                  rel='noreferrer'
                  href={`https://twitter.com/${twitter_username}`}
                >
                  <FaTwitterSquare className='mr-2' /> {twitter_username}
                </a>
              </p>
            )}
            {email && (
              <p className='link-secondary text-xl mb-1'>
                <a className='flex items-end' href={`mailto:${email}`}>
                  <IoIosMail className='mr-2 text-2xl' />
                  {email}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default UserCard
