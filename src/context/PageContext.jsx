import { useEffect } from 'react'
import { useState, createContext, useContext } from 'react'

export const PageContext = createContext()

const PageContextProvider = ({ children }) => {
  const [searchResultsLoading, setSearchResultsLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  
  return (
    <PageContext.Provider
      value={{ searchResultsLoading, setSearchResultsLoading, pageNumber, setPageNumber }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const useSetResultsLoading = (loading) => {
  const { setSearchResultsLoading } = useContext(PageContext)
  // set loading to false
  useEffect(() => {
    setSearchResultsLoading(loading)
    }
    , [setSearchResultsLoading, loading])
}

export default PageContextProvider
