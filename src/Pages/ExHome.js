import React from 'react'

export default function ExHome() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 h-[85vh] w-[100vw] bg-cover text-white " >
      
      <div className='pt-[200px] flex'>
        <img className="w-[50vw] h-[500px] p-4" src="/UIDesignIllustration1.svg" alt="" />
        <div className='w-[50vw] mt-10 p-6 pr-[150px]'>
          <h1 className='text-red-300 font-semibold text-2xl '>DEFI</h1>
          <h1 className='font-bold text-[47px] md:text-[37px]'>Scale the world of DeFi</h1>
          <p className='font xl:text-[20px] md:text-[17px]'>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.</p>
        </div>
      </div>
    </div>
    
  )
}
