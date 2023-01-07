import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab odio
        delectus tempora eum vel molestiae odit nobis impedit repellendus. Quo
        beatae sit cupiditate repellendus eius iure, possimus dolore velit at!
      </p>

      <p>
        Go to the <Link to='/'>Homepage</Link>.
      </p>
    </div>
  )
}

export default NotFound
