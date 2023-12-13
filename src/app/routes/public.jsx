import { lazy } from 'react'
const Home = lazy(() => import('../module/Home/pages'))
const Services = lazy(() => import('../module/Services/pages'))

const publicRoutes = [
  { path: '/', Component: Home },
  { path: '/services', Component: Services }
]
export default publicRoutes
