import React from 'react'
import { Bars } from 'react-loader-spinner'
import { RotatingLines } from 'react-loader-spinner'

function Loadder() {
    return (
        <div className='flex justify-center items-center mt-10 py-20'>
            <RotatingLines
                visible={true}
                height="96"
                width="110"
                color="gray"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loadder
