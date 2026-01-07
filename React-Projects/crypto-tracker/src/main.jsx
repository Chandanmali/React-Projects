import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Coin from './pages/Coin/Coin.jsx'
import CoincontextProvider from './context/Coincotext.jsx'

const appRouter = createBrowserRouter([


  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/coin/:coinId',
        element: <Coin />
      },


    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoincontextProvider>
      <RouterProvider router={appRouter} />
    </CoincontextProvider>
  </StrictMode>,
)


