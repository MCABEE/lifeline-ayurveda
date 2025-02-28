
import Link from 'next/link';
import React from 'react';

function Section3() {
  const therapies = [
    {
      title: "Spine & Joint Care",
      description: "Modern lifestyles, with prolonged screen time and sedentary habits, often take a toll on spinal health and joint mobility. Stiffness, radiating pain, and tingling sensations in the arms and fingers are common symptoms of spine-related issues. Ayurveda provides effective relief through specialized therapies like Marma manipulations (traditional spinal corrections), Abhyanga (herbal oil massage), Kizhi (herbal bundle massage), and Pizhichil (oil bath therapy). Alongside these treatments, mild exercise and a balanced diet further aid in restoring mobility and reducing pain.",
      descriptionDuration:"Treatment Duration: 2-3 weeks, depending on the patient’s condition and severity of the ailment."
    },
   
    {
        title: "Geriatric Care",
        description: "Aging is a natural process, and Ayurveda promotes graceful aging through balanced nutrition, seasonal regimens, and holistic therapies. By slowing degeneration and revitalizing tissues, Ayurvedic treatments enhance overall vitality. Therapeutic Yoga, tailored to individual needs, improves circulation and supports well-being. Common elderly concerns such as digestive disorders, joint degeneration, neurological conditions, sleep disturbances, and memory issues are managed through herbal oil massages, oil packs, and Shirodhara (oil pouring therapy)",
        descriptionDuration:"Treatment Duration: 2-3 weeks, based on individual health conditions."
      },
      {
        title: "Post-Cancer Care",
        description: "Recovering from cancer involves physical, emotional, and spiritual healing. Ayurveda aids this journey with therapies like Abhyanga (herbal oil massage) and Shirodhara (medicated oil or buttermilk therapy) to restore balance and strength. A tailored Ayurvedic diet, detoxification, and herbal formulations further support recovery. Incorporating Yoga, meditation, breathing exercises (Pranayama), and mindful living enhances overall resilience and helps regain vitality.",
        descriptionDuration:"Treatment Duration: 2-3 weeks, customized according to the patient’s needs."
      },{
        title: "Skin & Hair Care",
        description: "In today’s fast-paced world, skin and hair concerns are increasingly common due to stress and environmental factors. Ayurveda offers time-honored solutions for nourishing and rejuvenating the skin and hair. Treatments include Udwarthana (herbal exfoliation), oil massages, herbal skin and hair packs (Lepam), decoction baths, oil baths, and medicated milk baths. These therapies deeply cleanse, nourish, and restore the skin’s natural glow and hair health.",
        descriptionDuration:"Treatment Duration: 2-3 weeks, depending on individual conditions and treatment goals.By embracing Ayurveda, one can achieve holistic wellness, ensuring long-term health and vitality."
        
      },
  ];

  return (
    <div className='px-[40px] sm:px-[50px] md:px-[100px] xl:px-[160px] 2xl:px-[196px]'>
      <h1 className='text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-[48px] font-semibold text-center text-[#09B438] pb-[37px]'>
      Ayurvedic Care Treatments for
      </h1>

      {therapies.map((therapy, index) => (
        <div key={index} className='w-full bg-[#E7F8EC] border-[1px] border-[#999999] rounded-[15px] px-[13px] md:px-[26px] lg:px-[36px] xl:px-[66px] pt-[11px] pb-[23px] mb-6'>
          <h1 className='text-black text-[24px] sm:text-[30px] xl:text-[40px] font-semibold text-center pb-[8px]'>
            {therapy.title}
          </h1>
          <p className='text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light text-black leading-[140%] text-center'>
            {therapy.description}
          </p>
          <p className='text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light text-black leading-[140%] text-center'>
            {therapy.descriptionDuration}
          </p>
        </div>
      ))}

<Link href={"/contact"}>
<button className='w-[216px] xl:w-[328px] h-[40px] md:h-[64px] mx-auto my-[48px] text-white flex justify-center items-center bg-[#09B438] rounded-[15px] text-[12px] xl:text-[16px] font-semibold'>
    BOOK APPOINTMENT
    </button>
</Link>
    </div>
  );
}

export default Section3;
