import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation()
  let currentLink = ''

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index) => {
      currentLink += `/${crumb}`

      return (
        <div className='crumb' key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  return <div className='breadcrumbs'>{crumbs}</div>
}

export default Breadcrumb
