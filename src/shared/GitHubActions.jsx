import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
    per_page: 24,
  })

  const response = await github
    .get(`/search/users?${params}`)
    .catch(handleError)
  return response
}

// Get user and user's repos
export const getUserAndRepos = async (login) => {
  const params = {
    sort: 'created',
    per_page: 10,
  }

  const user = await github.get(`/users/${login}`).catch(handleError)
  const repos = await github
    .get(`/users/${login}/repos`, { params })
    .catch(handleError)

  return { user: user.data, repos: repos.data }
}

// handle errors
const handleError = (error) => {
  // Request made and server responded with a status code that falls out of the range of 2xx
  if (error.response) {
    console.error('Error response:')
    console.error(error.response.data)
    console.error(error.response.status)
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Error request:')
    console.error(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error message:')
    console.error(error.message)
  }
}
