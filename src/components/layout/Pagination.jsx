import { useContext } from 'react'
import { PageContext } from '../../context/PageContext'

const Pagination = ({ link, setPageNumber, pageNumber, component }) => {
  const { setReposPaginationState, setSearchPaginationState } =
    useContext(PageContext)

  const handleClick = (page) => {
    setPageNumber(page)
    if (component === 'search') {
      setSearchPaginationState({
        link,
        setPageNumber: () => {},
        pageNumber,
        component,
      })
    } else {
      setReposPaginationState({
        link,
        setPageNumber: () => {},
        pageNumber,
        component,
      })
    }
  }

  return (
    <div className='btn-group mt-2 pb-4 mx-2 mb-3'>
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
