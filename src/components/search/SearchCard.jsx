import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchCard = ({ avatar, username, admin }) => {
  return (
    <Link to={`/user/${username}`}>
      <div className='card shadow-xl bg-base-content text-primary-content flex flex-row md:flex-col m-0 p-0'>
        <figure>
          <img
            src={avatar}
            alt={`${username}'s avatar`}
            className='w-full min-w-24 h-24 md:h-max m-2 rounded-box bg-white  shadow-lg'
          />
        </figure>

        <div className='card-body md:h-24 md:pt-4'>
          <h2 className='card-title'>{username}</h2>
          {admin && <div className='badge badge-secondary'>Admin</div>}
        </div>
      </div>
    </Link>
  )
}

SearchCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  admin: PropTypes.bool,
}

export default SearchCard
