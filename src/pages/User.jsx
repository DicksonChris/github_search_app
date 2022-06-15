import { Link, useParams } from 'react-router-dom'
import UserCard from '../components/user/UserCard'
import UserReposCard from '../components/user/UserReposCard'
import { useGetUser } from '../hooks/useGetFromGithub'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { PageContext } from '../context/PageContext'

//https://api.github.com/users/<login>

function User() {
  const { login } = useParams()
  const navigate = useNavigate()
  const { reposPageNumber, setReposPageNumber } = useContext(PageContext)

  const { user } = useGetUser(login)

  return (
    <div className='grid justify-center'>
      <button
        className='btn mt-6 mx-4 mb-4 sm:max-w-[12rem]'
        onClick={() => {
          setReposPageNumber(1)
          navigate(-1)
        }}
      >
        Back To Search
      </button>
      <UserCard
        user={user?.data?.data}
        loading={user.loading}
        error={user.error}
      />
      <UserReposCard login={login} key={[login, reposPageNumber]} />
    </div>
  )
}

export default User
