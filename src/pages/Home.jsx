import SearchInput from '../components/search/SearchInput'
import SearchResults from '../components/search/SearchResults'

const Home = () => {

  return (
    <div className='container mx-auto'>
      <SearchInput />
      <SearchResults />
    </div>
  )
}

export default Home
