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
    <div className='h-8'>
      <blockquote className='prose m-0 mt-3 leading-none'>
        <q>{`${zenQuote}`}</q>
      </blockquote>
      <cite className='m-0 mb-1 leading-none'>— Github Zen</cite>
    </div>
  )
}

export default Zen
