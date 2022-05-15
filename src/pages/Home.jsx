import { useState } from 'react'
import SearchInput from '../components/search/SearchInput'

const Home = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className='form-control'>
      <SearchInput loading={loading} />
    </div>
  )
}

export default Home
