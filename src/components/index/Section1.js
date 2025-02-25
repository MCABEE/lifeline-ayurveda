import React from 'react'

function Section1() {
  return (
    <div className='bg-image  pb-[16px] sm:pb-[96px]'>
        <div className='px-[40px] sm:ps-[50px] lg:ps-[100px] 2xl:ps-[196px] pt-[124px] sm:pt-[200px] xl:pt-[271px] sm:pe-[100px] xl:pe-[500px]'>
            <h1 className='text-[28px] sm:text-[36px] xl:text-[56px] leading-[120%] text-white font-semibold'>Ayurveda - <br/>the science of life !</h1>
            <p className='text-[14px] sm:text-[20px] xl:text-[24px] leading-[120%] text-white mt-[22px] sm:me-[40px] lg:me-[100px]'>The world of ayurveda consists of holistic treatments that aim at restoring the balance in energy levels of the human body.</p>
        </div>
        <div className= 'mx-[40px] sm:mx-[50px] lg:mx-[100px] 2xl:mx-[196px] bg-white px-[27px] sm:px-[30px] xl:px-[68px] rounded-[30px] sm:flex justify-between items-center py-4 sm:py-8 xl:py-10 mt-[31px] sm:mt-[60px] xl:mt-[81px] '>
<p className='sm:w-[400px] xl:w-[490px] text-[14px] sm:text-[18px] xl:text-[24px] leading-[120%]  text-[#333333] text-center sm:text-left '>
    Experience holistic healing— <br className='sm:hidden block'/>your wellness journey starts here!</p>
    <button className='w-[216px] xl:w-[328px] h-[40px] xl:h-[64px] mt-[12px] sm:mt-0 mx-auto sm:mx-0 flex justify-center items-center text-white text-[14px] xl:text-[16px] font-semibold rounded-[15px] bg-[#09B438]'>
    BOOK APPOINTMENT
    </button>
        </div>
    </div>
  )
}

export default Section1