import { Link } from 'react-router-dom'
import { GoLinkExternal } from 'react-icons/go'

const RepoCard = ({ repo }) => {
  console.log(repo)
  const {
    created_at,
    description,
    homepage,
    html_url,
    is_template,
    license,
    name,
  } = repo
  console.log(license)
  const created = new Date(created_at).toLocaleDateString('en-US')
  return (
    <div className='container md:max-w-[max(640px, 60vw)] card bg-base-300 mx-3'>
      <div className='card-header mt-8 mx-16 mb-0'>
        <div className='grid grid-cols-2 items-center'>
          <h2 className='prose-xl link-accent'>
            <a href={html_url}>{name}</a>
          </h2>
          <div className='place-self-end'>{created}</div>
        </div>
      </div>
      <div className='card-body mx-8 pt-4'>
        {description && <p className='prose-md'>{description}</p>}
        {homepage && <p className='prose-md link-secondary'>
          <a href={homepage}>{homepage}</a>
        </p>}
        {license && <p className='prose-md'>
          <a href={license.url}>{license.name}</a>
        </p>}
      </div>
    </div>
  )
}

export default RepoCard
