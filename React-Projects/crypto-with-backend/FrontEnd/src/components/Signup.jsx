import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'

function Signup() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [password, setPassword] = useState()
    const [email, setEmail] = useState("")

    const fetchSignupApi = async() => {

        if (!name || !password || !email) {
            alert("Please enter required fields")
            return
        }

        await axios.post("http://localhost:3000/signup", {
            name: name,
            password: password,
            email: email
        })
        alert("Successfully registered")
        navigate("/login")
    }

    return (
        <div>
            <div className='min-h-screen bg-linear-to-b from-[#0b004e] via-[#1d152f] to-[#002834] text-white'>
                <div className='pt-10'>
                    <p className='text-5xl font-bold text-center '>Sign-Up</p>
                </div>

                <div className='border max-w-[650px] m-auto py-15 px-5 rounded-2xl mt-10'>
                    <div className='flex flex-col gap-7 px-5'>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className='py-2 px-5 shadow-2xl border border-gray-400 rounded-lg outline-none'
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                        />

                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className='py-2 px-5 shadow-2xl border border-gray-400 rounded-lg outline-none'
                            type="text"
                            placeholder='Enter Password'
                        />

                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='py-2 px-5 shadow-2xl border border-gray-400 rounded-lg outline-none'
                            type="text"
                            placeholder='Enter email-address'
                        />

                        <div className='flex flex-col gap-5 mt-5 '>
                            <button onClick={fetchSignupApi} className='bg-blue-800 py-2 rounded-lg font-semibold text-xl cursor-pointer '>sign-up</button>
                            <button onClick={() => navigate("/login")} className='bg-blue-800 py-2 rounded-lg font-semibold text-xl cursor-pointer'>Already sign-up? Login</button>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Signup
