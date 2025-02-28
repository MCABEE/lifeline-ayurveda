
import Section1 from '@/components/services/Section1'
import Section2 from '@/components/services/Section2'
import Section3 from '@/components/services/Section3'
import Section4 from '@/components/services/Section4'
import Section5 from '@/components/services/Section5'
import Section6 from '@/components/services/Section6'
import Section7 from '@/components/services/Section7'
import React from 'react'

function page() {
  return (
    <div>
        <Section1/>
       <div className='max-w-[1700px] mx-auto'>
       <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
       </div>
    </div>
  )
}

export default page