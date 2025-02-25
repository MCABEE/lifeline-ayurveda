import Section1 from '@/components/index/Section1'
import Section2 from '@/components/index/Section2'
import Section3 from '@/components/index/Section3'
import Section4 from '@/components/index/Section4'
import Section5 from '@/components/index/Section5'
import Section6 from '@/components/index/Section6'


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
    </div>
    </div>
  )
}

export default page