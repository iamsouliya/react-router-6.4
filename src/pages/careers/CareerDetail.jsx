import { useLoaderData } from 'react-router-dom'

function CareerDetail() {
  const career = useLoaderData()

  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className='details'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          quibusdam sint nam quaerat repudiandae! Atque dolorem molestias aut
          praesentium error ipsam alias aliquid aperiam saepe quibusdam placeat
          ipsum libero sed, assumenda deserunt officia soluta? Qui delectus
          perspiciatis aspernatur facere explicabo numquam odit sit minima eaque
          temporibus porro, quia molestiae a.
        </p>
      </div>
    </div>
  )
}

export default CareerDetail

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch(' http://localhost:4000/careers/' + id)

  if (!res.ok) {
    throw Error('Could not find that career')
  }

  return res.json()
}
