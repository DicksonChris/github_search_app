import JSONViewer from 'react-json-viewer'
import Loading from '../../components/layout/Loading'

const UserReposCard = ({ repos, loading }) => {
  return <>{loading ? <Loading /> : <JSONViewer json={repos} />}</>
}
export default UserReposCard
