import React from 'react'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { Coincontext } from '../../context/Coincotext'
import { Link } from 'react-router-dom'

function Navbar() {

  const {setCurrency} = useContext(Coincontext)

  const currencyHandler = (e) => {
    switch(e.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break;
      } 
      
      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break;
      } 
      
      case "inr": {
        setCurrency({name: "inr", symbol: "₹"})
        break;
      }
      
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }

  }

  return (
    <div>
      <div className='flex text-white justify-between items-center px-30 pt-6'>
        <div className='w-44 '>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className='flex list-none text-md font-medium  gap-16'>
            
                <Link to={"/"}>Home</Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            
        </div>

        <div className='flex gap-5 text-sm'>
            <select onChange={currencyHandler} className=' border-2 rounded-lg py-1 px-2'>
                <option className='text-black' value="usd">USD</option>
                <option className='text-black' value="eur">EUR</option>
                <option className='text-black' value="inr">INR</option>
            </select>
            <button className='bg-white text-black px-6 py-2 rounded-full font-semibold'>Sign up </button>
        </div>
      </div>

      <div className='border border-gray-600 mt-5'>

      </div>
    </div>
  )
}

export default Navbar
