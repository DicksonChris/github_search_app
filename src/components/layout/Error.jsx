const Error = ({ error }) => {
  console.error('Error response:')
  console.error(error.response.data)
  console.error(error.response.status)
  return <div>Error: Something went wrong</div>
}
export default Error
