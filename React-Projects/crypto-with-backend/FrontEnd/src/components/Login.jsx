import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    return (
        <div>
            <div className='min-h-screen bg-linear-to-b from-[#0b004e] via-[#1d152f] to-[#002834] text-white'>
                <div className='pt-10'>
                    <p className='text-5xl font-bold text-center '>Login</p>
                </div>

                <div className='border max-w-[650px] m-auto py-15 px-5 rounded-2xl mt-10'>
                    <div className='flex flex-col gap-7 px-5'>
                        <input className='py-2 px-5 shadow-2xl border border-gray-400 rounded-lg outline-none' type="text" placeholder='Enter your name' />

                        <input className='py-2 px-5 shadow-2xl border border-gray-400 rounded-lg outline-none' type="text" placeholder='Enter Password' />

                        <div className='flex flex-col gap-5 mt-5 '>
                            <button className='bg-blue-800 py-2 rounded-lg font-semibold text-xl cursor-pointer '>Login</button>
                            <button onClick={() => navigate('/signup')} className='bg-blue-800 py-2 rounded-lg font-semibold text-xl cursor-pointer'>create account</button>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Login
