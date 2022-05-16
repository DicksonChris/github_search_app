import { useState, useEffect } from 'react'
import { getZen } from '../search/SearchActions'

const Zen = () => {
  const [zenQuote, setZenQuote] = useState('')

  useEffect(() => {
    // Get github zen quote else API is down
    const fetchZen = async () => {
      const quote = await getZen()
      setZenQuote(quote)
    }
    fetchZen()
  }, [])

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
