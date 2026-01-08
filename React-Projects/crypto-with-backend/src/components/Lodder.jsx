import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Lodder() {
  return (
    <div>
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
    </div>
  )
}

export default Lodder
