
import Link from 'next/link';
import React from 'react';

function Section3() {
  const therapies = [
    {
        title: "Neurological Wellness",
        description: "The brain and nervous system control our body's vital functions, making neurological health crucial. Modern lifestyles, genetic factors, and improper habits contribute to an increase in conditions such as Parkinson’s disease, multiple sclerosis, migraines, and polyneuropathy. Ayurveda helps manage these disorders through Panchakarma, Rasayana (immune boosters), and therapies like Shirodhara (oil pouring on the forehead), Nasyam (nasal cleansing), and herbal packs. Combined with dietary changes and therapeutic yoga, these treatments aid in restoring nervous system balance.",
        descriptionDuration:" Duration: 2-3 weeks (varies based on condition)."
      },
   
    {
        title: "Musculoskeletal Care",
        description: "Aches and stiffness in joints, muscles, and the spine are common due to sedentary lifestyles, injuries, and aging. Conditions like arthritis, frozen shoulder, sciatica, and disc prolapse can be effectively managed with Ayurvedic therapies. Treatments include Marma massages (energy point stimulation), Pizhichil (oil bath), Kizhi (herbal bundle massage), and Vasthi (medicated enema), which help reduce inflammation, improve flexibility, and promote mobility. Therapeutic yoga ensures sustained musculoskeletal health.",
        descriptionDuration:"Duration: 2-3 weeks (varies based on condition)."
      },
      {
        title: "Women’s Health & Hormonal Balance",
        description: "A woman’s body undergoes several changes throughout life, requiring special care to maintain hormonal balance and overall well-being. Ayurveda supports conditions like PCOD, infertility, menstrual irregularities, and menopause syndrome with personalized treatments. Herbal massages like Udwarthanam (powder massage) and Abhyanga (traditional oil massage) aid in metabolism, detoxification, and hormonal regulation. Lifestyle corrections and yoga further enhance the healing process.",
        descriptionDuration:"Duration: 2-3 weeks (varies based on condition)."
      },
      {
        title: "Skin Healing & Rejuvenation",
        description: "The skin reflects inner health, and imbalances in diet, lifestyle, and toxins often manifest as conditions like psoriasis, eczema, acne, and allergies. Ayurveda offers treatments such as herbal pastes (Lepas), Udwarthanam (peeling therapy), Kashaya Dhara (decoction bath), and Ksheeradhara (milk bath) to cleanse and nourish the skin. Detoxification therapies, including liver cleansing and herbal blood purifiers, help in long-term skin health and radiance.",
        descriptionDuration:"Duration: 2-3 weeks (varies based on condition)."
      },
      
  ];

  return (
    <div className='px-[40px] sm:px-[50px] md:px-[100px] xl:px-[160px] 2xl:px-[196px]'>
      <h1 className='text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-[48px] font-semibold text-center text-[#09B438] pb-[37px]'>
      Ayurvedic Cure Treatments for
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
