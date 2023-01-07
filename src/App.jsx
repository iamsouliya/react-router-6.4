import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
// layouts
import { Default as RootLayout } from './layouts/Default'
import { Careers as CareersLayout } from './layouts/Careers'
import { Help as HelpLayout } from './layouts/Help'
// pages
import About from './pages/About'
import Careers, { careersLoader } from './pages/careers/Careers'
import Contact, { contactAction } from './pages/help/Contact'
import Faq from './pages/help/Faq'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CareerDetail, { careerDetailsLoader } from './pages/careers/CareerDetail'
import CareerError from './pages/careers/CareerError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=':id'
          element={<CareerDetail />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
