import { AiFillInfoCircle } from 'react-icons/ai'

const Alert = ({ show }) => {
  return (
    <div>
      <div className='relative'>
        {true ? (
          <div
            className={`absolute bg-transparent top-14 max-w-lg alert ${
              show || 'hidden'
            }`}
          >
            <div>
              <AiFillInfoCircle className='fill-info' />{' '}
              <span>Enter a username</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Alert
