import JSONViewer from 'react-json-viewer'
import Loading from '../../components/layout/Loading'
import Error from '../../components/layout/Error'

const UserCard = ({ user, loading, error }) => {
  if (error) {
    return <Error error={error} />
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <JSONViewer json={user} />
    </>
  )
}
export default UserCard
