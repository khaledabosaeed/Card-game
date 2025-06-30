
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NotFoundpage from './pages/notFoundpage'
import Game from './pages/game'
import Login from './pages/login'
import Score from './pages/score'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/game',
      element: <Game />
    },
    {
      path: '/score',
      element: <Score />
    },
    {
      path: '*',
      element: <NotFoundpage />
    },

  ])
  return (
    <>
      <RouterProvider router={routes} >
      </RouterProvider>
    </>
  )
}

export default App
