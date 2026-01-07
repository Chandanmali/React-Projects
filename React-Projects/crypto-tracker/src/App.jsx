import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{fontFamily: "Outfit, sans-serif"}} className='min-h-screen  bg-linear-to-b from-[#0b004e] via-[#1d152f] to-[#002834]'>
        <div>
          <div>
             <Navbar />
             <Outlet />
             <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
