
import Link from 'next/link';
import React from 'react';

function Section3() {
  const therapies = [
    {
        title: "Rejuvenation Therapy",
        description: "Rasayana Chikitsa, or rejuvenation therapy, focuses on revitalizing both body and mind at a cellular level. It enhances immunity, calms the nervous system, and promotes overall vitality. Personalized treatments are provided based on individual body types, including therapies like Abhyanga (oil massage), Shirodhara (oil pouring on the forehead), Pizhichil (oil bath), and Njavarakizhi (rice bolus massage).",
        descriptionDuration:"Duration: 2 weeks"
      },
   
      {
        title: "Anti-Aging & Longevity",
        description: "Aging is a natural process, but Ayurveda offers time-tested remedies to slow its effects. Rasayana therapies nourish the body, enhance mental clarity, and support longevity. The program includes herbal detox, tailored diets, rejuvenating massages (oil bath, milk bath, and Njavarakizhi), yoga, and lifestyle modifications to maintain youthful vigor.",
        descriptionDuration:"Duration: 3 weeks"
      },{
        title: "Ayurvedic Detox",
        description: "Accumulated toxins can lead to imbalances and health issues over time. Ayurvedic detox helps cleanse the body, boost circulation, and restore balance. Using personalized Panchakarma treatments, herbal combinations, and detox therapies, this program eliminates impurities and rejuvenates the system.",
        descriptionDuration:"Duration: 2–3 weeks"
      },{
        title: "Immunity Boosting Therapy",
        description: "A strong immune system is key to maintaining health and preventing diseases. Ayurveda strengthens immunity through herbal therapies like Podikizhi (herbal powder massage), Elakizhi (leaf bundle massage), Njavarakizhi, cleansing treatments, and nourishing diets. This holistic approach enhances the body's natural defense mechanisms.",
        descriptionDuration:"Duration: 2 weeks"
      },{
        title: "Healthy Weight Management",
        description: "Obesity and excessive weight can impact both health and confidence. Ayurveda offers a natural, sustainable approach to weight management through dietary corrections, herbal fat metabolism boosters, detox therapies (Udwarthanam, Kashayadhara, Elakizhi, Pizhichil), and customized exercise and yoga routines to tone and strengthen the body.",
        descriptionDuration:"Duration: 3 weeks"
      },{
        title: "Radiant Beauty Therapy",
        description: "True beauty comes from within, and Ayurveda enhances natural radiance through skin and hair care therapies. Using herbal face packs, oil massages, steam baths, and blood-purifying treatments, this program nourishes the skin and hair while promoting inner well-being. A cleansing diet further supports long-lasting beauty and vitality.",
        descriptionDuration:"Duration: 2 weeks"
      },
      
  ];

  return (
    <div className='px-[40px] sm:px-[50px] md:px-[100px] xl:px-[160px] 2xl:px-[196px]'>
      <h1 className='text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-[48px] font-semibold text-center text-[#09B438] pb-[37px]'>
      Ayurvedic Wellness Treatments
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
