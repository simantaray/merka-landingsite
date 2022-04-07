import React from 'react'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 h-[100vh] w-[100vw] bg-cover text-white " >
        <Header />
        <div className='flex justify-center'>
            <div className=' w-[50vw] pl-[150px] pt-[120px] pr-[100px] m-[1px]'>
                <h1 className='text-[49px] font-bold'>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</h1>
                <button className='rounded-md border-2 border-white-100 p-4 font-bold text-[19px] mt-10'> Explor More</button>
            </div>
            <div className='w-[50vw]'>
                <img src="/bitcoin.svg" alt="" />
            </div>
        </div>
        <div className="relative mt-[-60px] bg-[url('/public/hero-bg.svg')] h-[150px] w-[100vw] bg-cover">
            <img className='absolute top-[-80px] left-0 right-0 bottom-0 m-auto ' src="/HeroWaves.svg" alt="" />
        </div>
    </div>
  )
}
