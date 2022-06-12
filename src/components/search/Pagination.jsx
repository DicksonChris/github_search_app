import { useContext } from 'react'
import { PageContext } from '../../context/PageContext'

const Pagination = ({ link }) => {
  const { pageNumber, setPageNumber } = useContext(PageContext)

  const handleClick = (page) => {
    setPageNumber(page)
  }

  return (
    <div className='btn-group mt-2 pt-8 pb-4 mx-2'>
      {/* First page */}
      <button
        onClick={() => handleClick(1)}
        className={`btn ${pageNumber === 1 && 'btn-disabled'}`}
      >
        first
      </button>
      {/* Previous page */}
      {link.prev && (
        <button
          onClick={() => handleClick(parseInt(link.prev.page))}
          className='btn'
        >
          {link.prev.page}
        </button>
      )}
      {/* Current page */}
      <button className='btn btn-active'>{pageNumber}</button>
      {/* Next page */}
      {link.next && (
        <button
          onClick={() => handleClick(parseInt(link.next.page))}
          className='btn'
        >
          {link.next.page}
        </button>
      )}
      {/* Last page */}
      <button
        onClick={() => handleClick(parseInt(link.last.page))}
        className={`btn ${!link.last && 'btn-disabled'}`}
      >
        last
      </button>
    </div>
  )
}
export default Pagination
