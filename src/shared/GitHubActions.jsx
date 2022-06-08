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
  })

  const response = await github
    .get(`/search/users?${params}`)
    .catch(handleError)
  return response.data.items
}

// Get user and user's repos
export const getUserAndRepos = async (login) => {
  const params = {
    sort: 'created',
    per_page: 10,
  }
  // https://api.github.com/users/mojombo
  const user = await github.get(`/users/${login}`).catch(handleError)
  const repos = await github.get(`/users/${login}/repos`, { params }).catch(handleError)
 
  return { user: user.data, repos: repos.data }
}

// Get Zen quote
export const getZen = async () => {
  const response = await github.get(`/zen`).catch(handleError)

  return response.data
}

// handle errors
const handleError = (err) => {
  // Request made and server responded with a status code that falls out of the range of 2xx
  if (err.response) {
    console.error('Error response:')
    console.error(err.response.data)
    console.error(err.response.status)
  } else if (err.request) {
    // The request was made but no response was received
    console.error('Error request:')
    console.error(err.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Error message:')
    console.error(err.message)
  }
}
