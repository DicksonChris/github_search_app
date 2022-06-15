import axios from 'axios'
import { useEffect, useState } from 'react'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// Takes a search term and returns a promise that resolves to the search results
export const useSearchUsers = (params) => {
  return useGetFromGithub('/search/users', params)
}

// Rakes a login and params and returns a promise that resolves to that user's repos
export const useGetUserRepos = (login, params) => {
  return useGetFromGithub(`/users/${login}/repos`, params)
}

// Takes a login and returns a promise that resolves to the user and their repos
export const useGetUser = (login) => {
  return {
    user: useGetFromGithub(`/users/${login}`),
  }
}

// Takes a url and returns a promise that resolves to the response
export const useGetFromGithub = (url, options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await github.get(url, options)
        setData(response)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, error, loading }
}