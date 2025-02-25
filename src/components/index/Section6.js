import React from 'react'

function Section6() {
  return (
    <div className="px-[40px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px] pt-14">
    <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-4 sm:pt-0">
    LOCATION
    </h1>
    <h1 className="text-[32px]  xl:text-[42px] text-[#333333] font-semibold text-center">
    How to reach us
    </h1>
    <button className='w-[224px] md:w-[258px] h-[48px] mx-auto mt-2 sm:mt-6 flex justify-center items-center border-[1px] border-[#999999] rounded-[10px] text-[14px] md:text-[16px] text-[#333333]'>
        Get Directions on Google Map
        </button>
        <img src="/assets/location.svg" alt="location" className='mx-auto my-[59px] hidden sm:block' />
        <img src="/assets/location-small-screen.svg" alt="location" className='mt-[22px] mx-auto  sm:hidden block' />
        <div className='my-[30px] sm:hidden flex flex-col gap-y-2'>
            <div className='border-[1px] border-[#999999] rounded-[10px] ps-[24px] pe-[46px] py-[26px]'>
                <div className='flex justify-between items-center '>
                    <img src="/assets/airplane.svg" alt="airplane" />
                    <span className='text-[16px] text-black font-semibold'>67 Km</span>
                </div>
                <p className='text-[16px] text-[#333333] pt-3'>From</p>
                <p className='text-[16px] text-[#333333]'> Cochin International Airport</p>

            </div>
            <div className='border-[1px] border-[#999999] rounded-[10px] ps-[24px] pe-[46px] py-[26px]'>
                <div className='flex justify-between items-center '>
                    <img src="/assets/train.svg" alt="train" />
                    <span className='text-[16px] text-black font-semibold'>35 Km</span>
                </div>
                <p className='text-[16px] text-[#333333] pt-3'>From</p>
                <p className='text-[16px] text-[#333333]'> Kottayam Railway Station</p>

            </div>
        </div>


    </div>
  )
}

export default Section6