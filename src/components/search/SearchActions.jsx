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

  const response = await github.get(`/search/users?${params}`).catch((err) => {
    console.error('Error response:')
    console.error(err.response.data)
    console.error(err.response.status)
  })
  return response.data.items
}

// Get user and user's repos
export const getUserAndRepos = async (login) => {
  const params = {
    sort: 'created',
    per_page: 10,
  }

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`, { params }),
  ]).catch((err) => {
    console.error('Error response:')
    console.error(err.response.data)
    console.error(err.response.status)
  })
  return { user: user.data, repos: repos.data }
}

// Get Zen quote
export const getZen = async () => {
  const response = await github.get(`/zen`).catch((err) => {
    console.error('Error response:')
    console.error(err.response.data)
    console.error(err.response.status)
  })

  return response.data
}
