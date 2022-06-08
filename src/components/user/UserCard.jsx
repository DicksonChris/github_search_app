import { useEffect } from 'react'
import JSONViewer from 'react-json-viewer'
import Loading from '../../components/layout/Loading'

const UserCard = ({ user, loading }) => {
  return <>{loading ? <Loading /> : <JSONViewer json={user} />}</>
}
export default UserCard
