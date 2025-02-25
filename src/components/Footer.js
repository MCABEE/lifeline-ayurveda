import React from 'react'

function Footer() {
  return (
 <div>
      <div className='px-[40px] sm:px-[20px] md:px-[60px] xl:px-[160px] 2xl:px-[197px] pt-[20px] sm:pt-[48px] lg:pt-[68px] pb-[18px] border-b-[1px] sm:border-y-[1px] border-[#999999]'>
     <div className='hidden sm:grid grid-cols-4'>
        <div className='pt-6'>
        <img src="/assets/footer-logo.svg" alt="logo" className='w-[80px] lg:w-auto'/>
        </div>

        <div className='flex flex-col gap-y-3 lg:gap-y-5 text-[12px] lg:text-[16px]'>
            <span className=' text-[#333333]'>Services</span>
            <span className=' text-[#333333]'>Treatments</span>
            <span className=' text-[#333333]'>Our Team</span>
            <span className=' text-[#333333]'>Testimonials</span>
            <span className=' text-[#333333]'>About us</span>
        </div>

        <div className='flex flex-col gap-y-3 lg:gap-y-5 text-[12px] lg:text-[16px]'>
            <span className=' text-[#333333]'>Ayurveda Care</span>
            <span className=' text-[#333333]'>Ayurveda Cure</span>
            <span className=' text-[#333333]'> Wellness</span>
            <span className=' text-[#333333]'>Ayurveda Therapy</span>
            <span className=' text-[#333333]'>Postnatal Care</span>
        </div>

        <div className='flex flex-col text-[12px] lg:text-[16px] '>
            <span className='text-[#333333] font-bold pb-3 lg:pb-[20px]'>Contact</span>
            <span className='text-[#333333]'>Lifeline Ayurveda</span>
            <span className='text-[#333333]'> Kollappally - Melukavu Road</span>
            <span className='text-[#333333]'>Kollappally Jn, Kadanadu P.O</span>
            <span className='text-[#333333] pb-3 lg:pb-[20px]'>Pala, Kerala - 686 653</span>
            <span className='text-[#333333]'>Tel: 91 - 8156806004</span>

        </div>

    </div>


{/* for small screens */}
   <div className='sm:hidden block'>
   <div className=''>
        <img src="/assets/footer-logo.svg" alt="logo" className='w-[80px] pb-6 mx-auto'/>
        </div>
        <div className='w-full flex'>
<div className='w-1/2 text-[14px]  gap-y-3 flex flex-col'>

<span className=' text-[#333333]'>Services</span>
            <span className=' text-[#333333]'>Treatments</span>
            <span className=' text-[#333333]'>Our Team</span>
            <span className=' text-[#333333]'>Testimonials</span>
            <span className=' text-[#333333]'>About us</span>
        </div>
        <div className='w-1/2 text-[14px] gap-y-3 flex flex-col'>

<span className=' text-[#333333]'>Ayurveda Care</span>
            <span className=' text-[#333333]'>Ayurveda Cure</span>
            <span className=' text-[#333333]'> Wellness</span>
            <span className=' text-[#333333]'>Ayurveda Therapy</span>
            <span className=' text-[#333333]'>Postnatal Care</span>
        </div>




        </div>

        
        <div className='flex flex-col text-[14px] pt-12'>
            <span className='text-[#333333] font-bold pb-3 lg:pb-[20px]'>Contact</span>
            <span className='text-[#333333]'>Lifeline Ayurveda</span>
            <span className='text-[#333333]'> Kollappally - Melukavu Road</span>
            <span className='text-[#333333]'>Kollappally Jn, Kadanadu P.O</span>
            <span className='text-[#333333] pb-3 lg:pb-[20px]'>Pala, Kerala - 686 653</span>
            <span className='text-[#333333]'>Tel: 91 - 8156806004</span>

        </div>
   </div>

    <div className='flex items-center justify-center pt-8 lg:pt-12 gap-3 sm:gap-8'>
        <img src="/assets/facebook.svg" alt="facebook" className='size-6 lg:size-auto' />
        <img src="/assets/youtube.svg" alt="youtube"  className='size-7 lg:size-auto' />

        </div>
        <p className='text-black text-[14px] sm:text-[12px] lg:text-[14px] pt-[18px] lg:pt-[29px] text-center'>Copyright @ 2025 Lifeline Ayurveda</p>
   </div>

  
   <p className='text-[#333333] text-[16px]  sm:text-[14px] lg:text-[16px] pt-[12px] text-center'>Powered by</p>
   <p className='text-[#333333] text-[16px]  sm:text-[14px] lg:text-[16px] pt-[9px]  pb-[27px] text-center'>MCABEE DIGITAL</p>

 </div>
  )
}

export default Footer