import { NavLink, Outlet } from 'react-router-dom'

function Help() {
  return (
    <div className='help-layout'>
      <h2>Website help</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        voluptate earum similique consectetur sed nisi error sint magnam,
        doloremque possimus quos distinctio iure minima vitae a! Fugit eum ad
        debitis?
      </p>

      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export { Help }
