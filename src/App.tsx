import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCss } from './styles'

import Home from './pages/Home'
import LaDolceVitaTrattoria from './pages/RestaurantsPage/LaDolceVitaTrattoria'
import HiokiSushi from './pages/RestaurantsPage/HiokiSushi '
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/LaDolceVitaTrattoria',
    element: <LaDolceVitaTrattoria />
  },
  {
    path: '/HiokiSushi',
    element: <HiokiSushi />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
