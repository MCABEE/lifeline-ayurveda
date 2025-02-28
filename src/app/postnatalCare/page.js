
import Section1 from '@/components/postnatalCare/Section1'
import Section2 from '@/components/postnatalCare/Section2'
import Section3 from '@/components/postnatalCare/Section3'
import React from 'react'

function page() {
  return (
    <div>
       <Section1/> 
       <div className='max-w-[1700px] mx-auto'>
       <Section2/>
       <Section3/>
       </div>
    </div>
  )
}

export default page