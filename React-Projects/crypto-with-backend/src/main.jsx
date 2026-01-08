import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import CoinContextProvider from './context/CoinContext.jsx'
import Coin from './pages/CoinPage/Coin.jsx'

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
        path: "/coin/:coinId",
        element: <Coin />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoinContextProvider>
      <RouterProvider router={appRouter} />
    </CoinContextProvider>
  </StrictMode>,
)
