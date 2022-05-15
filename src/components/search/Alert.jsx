import { AiFillInfoCircle } from 'react-icons/ai'

const Alert = ({ show }) => {
  return (
    <div>
      <div className='relative'>
        {true ? (
          <div
            className={`absolute bg-base-300 top-16 max-w-lg alert shadow-lg ${
              show || 'hidden'
            }`}
          >
            <div>
              <AiFillInfoCircle className='fill-info' />{' '}
              <span>Enter a username to begin.</span>
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
