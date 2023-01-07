import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumb'

function Default() {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to='/careers'>Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export { Default }
