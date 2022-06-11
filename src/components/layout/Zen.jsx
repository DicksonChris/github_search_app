import { useGetFromGithub } from '../../hooks/useGetFromGithub'
import Error from './Error'

const Zen = () => {
  const { data, error, loading } = useGetFromGithub('/zen')

  if (loading) {
    return <></>
  }
  if (error) {
    return <Error error={error} />
  }
  const zenQuote = data.data
  return (
    <div className='flex flex-col mt-3 mb-1'>
      <blockquote className='prose leading-none'>
        <q>{`${zenQuote}`}</q>
      </blockquote>
      <p className='leading-none'>— Github Zen</p>
    </div>
  )
}

export default Zen
