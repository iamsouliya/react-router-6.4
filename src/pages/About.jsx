import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function About() {
  const [user, setUser] = useState('nexsiz')

  if (!user) {
    return <Navigate to='/' replace={true} />
  }

  return (
    <div className='about'>
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        similique aliquam reiciendis! Perspiciatis dolores suscipit minima porro
        sapiente sint id dolorem. Sit est repudiandae iusto blanditiis! Ullam
        voluptas autem corporis, sit ad nihil, itaque a vitae porro sapiente
        ratione quisquam aut et delectus cumque inventore perferendis sequi
        error ipsa ex.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
