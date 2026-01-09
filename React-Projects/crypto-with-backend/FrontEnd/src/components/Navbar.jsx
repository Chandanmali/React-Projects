import React, { useContext } from 'react'
import Logo from "../assets/logo.png"
import { CoinContext } from '../context/CoinContext'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const { currency, setCurrency } = useContext(CoinContext)
    const navigate = useNavigate()

    const currencyHandler = (e) => {
        switch (e.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }

            case "eur": {
                setCurrency({ name: "eur", symbol: "€" })
                break;

            }
                
            case "inr":{
                setCurrency({ name: "inr", symbol: "₹" })
                break;
            } 

            default: {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }
        }
    }
    return (
        <div>
            <div className='flex items-center justify-between px-25 border-b-2 border-gray-500 py-5'>
                <Link to={"/"}>
                    <img className='cursor-pointer' src={Logo} alt="" />
                </Link>
                <div>
                    <ul className='flex gap-10 font-semibold cursor-pointer'>
                        <Link to={"/"}>Home</Link>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='flex gap-10'>
                    <select onChange={currencyHandler} className='border-2 px-2 rounded-xl'>
                        <option className='text-black' value="usd">USD</option>
                        <option className='text-black' value="eur">ERU</option>
                        <option className='text-black' value="inr">INR</option>
                    </select>

                    <div className='flex gap-5'>

                        <button onClick={() => navigate('/signup')} className='text-black bg-white px-4 py-2 rounded-full font-semibold text-sm cursor-pointer'>Sign Up</button>

                        <button onClick={() => navigate("/login")} className='text-black bg-white px-4 py-2 rounded-full font-semibold text-sm cursor-pointer'>Login</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
