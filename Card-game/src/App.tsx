
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NotFoundpage from './pages/notFoundpage'
import Game from './pages/game'
import Login from './pages/login'
import Score from './pages/score'
import { GameProvider } from './providers/gameContext'

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
    <GameProvider>
      <RouterProvider router={routes} />
    </GameProvider>
  )
}

export default App
