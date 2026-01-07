import React, { useContext, useEffect, useState } from 'react'
import { Coincontext } from '../../context/Coincotext'
import Shimmer from '../../components/Shimmer'
import { Link } from 'react-router-dom'

function Home() {

  const { allCoin, currency } = useContext(Coincontext)
  const [displayData, setDisplayData] = useState([])

  const [input, setInput] = useState("")

  const filterData = async(searchText) => {
    const coin = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    }) 
    setDisplayData(coin)
  }

  const searchHandler = async(e) => {
    // e.preventDefault()
    const value = e.target.value
    setInput(value)
    filterData(value)
  }


  useEffect(() => {
    setDisplayData(allCoin)
  }, [allCoin])

  return (
    <div>
      <div className='text-white mt-15 '>
        <div className='text-white'>
          <h1 className='font-bold text-6xl text-center leading-17'>Largest <br /> Crypto Marketplace</h1>
          <p className='font-normal text-lg text-center mt-7 flex flex-col justify-center'>welcome to world's largest cryptocurrency marketplace. <span>Sign up to explore more about cryptos</span></p>
        </div>
        <div className='flex justify-center mt-10'>
          <form className='bg-white px-5 py-2 rounded-sm w-[560px]'>

            <input 
             onChange={searchHandler}
             value={input}
             className='text-black text-lg w-[430px] border-none outline-none focus:outline-none focus:ring-0 px-2 py-1' 
             type="text" 
             placeholder='Search cryptos...' />

            {/* <button className='bg-[#7927FF] rounded-sm px-5 py-2 cursor-pointer'>Search</button> */}
          </form>
        </div>

        <div className='max-w-[900px] m-auto rounded-t-2xl bg-[#230F53] mt-12'>
          <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] gap-10 px-7 py-4  border-b border-gray-400'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className='text-center'>24H Change</p>
            <p className='text-right'>Market Cap</p>
          </div>

          <div>
            {displayData.length === 0 ? <Shimmer /> :
              displayData.slice(0, 10).map((data, index) => {
                return <Link to={`/coin/${data.id}`} key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] gap-10 px-7 py-4  border-b border-gray-500 last:border-none cursor-pointer'>
                  <p>{data.market_cap_rank}</p>
                  <div className='flex items-center gap-5'>
                    <img className='w-[35px]' src={data.image} alt="" />
                    <p>{data.name +" - "+ data.symbol}</p>
                  </div>
                  <p>{currency.symbol}  {data.current_price.toLocaleString()}</p>

                  {
                    Math.floor(data.price_change_percentage_24h*100) /100 >= 0 ? <p className='text-center text-green-400'>{Math.floor(data.price_change_percentage_24h*100) /100 }</p> : <p className='text-center text-red-600'>{Math.floor(data.price_change_percentage_24h*100) /100 }</p>
                  }
                 
                  <p className='text-right'>{currency.symbol} {data.market_cap.toLocaleString()}</p>


                </Link>
              })
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
