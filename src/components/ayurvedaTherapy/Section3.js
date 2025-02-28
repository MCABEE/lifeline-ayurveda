// import React from 'react'

// function Section3() {
//   return (
//     <div className='px-[40px] sm:px-[50px] md:px-[100px] xl:px-[160px] 2xl:px-[196px]'>
//         <h1 className='text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-[48px] font-semibold text-center text-[#09B438] pb-[37px] '>Types of Ayurvedic Therapies</h1>

//         <div className='w-full bg-[#E7F8EC] border-[1px] border-[#999999] rounded-[15px] px-[13px] md:px-[26px] lg:px-[36px] xl:px-[66px] pt-[11px] pb-[23px]'>
//             <h1 className='text-black text-[24px] sm:text-[30px] xl:text-[40px] font-semibold text-center pb-[8px]'>Shirodhara</h1>
//             <p className='text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light text-black leading-[140%] text-center'> Shirodhara is an ancient Ayurvedic therapy that brings balance to the mind, body, and spirit. It is known for its ability to rejuvenate and purify the body while also addressing neurological ailments. In this therapy, warm medicated oil, buttermilk, milk, or herbal decoctions are gently poured onto the forehead for approximately 30 minutes, followed by a soothing abhyanga massage. </p>
//         </div>
//     </div>
//   )
// }

// export default Section3




import Link from 'next/link';
import React from 'react';

function Section3() {
  const therapies = [
    {
      title: "Shirodhara",
      description: "Shirodhara is an ancient Ayurvedic therapy that brings balance to the mind, body, and spirit. It is known for its ability to rejuvenate and purify the body while also addressing neurological ailments. In this therapy, warm medicated oil, buttermilk, milk, or herbal decoctions are gently poured onto the forehead for approximately 30 minutes, followed by a soothing abhyanga massage."
    },
    {
      title: "Shirovasti",
      description: "Shirovasti involves retaining medicated oil on the head. A bandage and cylindrical cap are placed around the head, and warm herbal oils are poured inside, allowing them to penetrate the scalp. This deeply relaxing treatment helps in alleviating stress and promoting mental clarity."
    },
    {
      title: "Nasyam",
      description: "Nasyam is a detoxification therapy focused on clearing the head and nasal passages. Medicated oil is administered through the nostrils, followed by a gentle massage and steaming of the soles, shoulders, neck, and palms, both before and after the treatment."
    },
    {
      title: "Kizhi",
      description: "Kizhi is a specialized Ayurvedic therapy originating from Kerala. Herbal ingredients are packed into a cloth bundle (Kizhi), which is then heated and applied to the affected area or the entire body. The warmth and medicinal properties enhance circulation, relieve pain, and reduce stiffness."
    },
    {
      title: "Abhyanga",
      description: "Abhyanga is a synchronized massage using warm, herbal-infused oil applied in rhythmic, sequential strokes. It can be a full-body or localized treatment, depending on the individual’s condition, and typically lasts 40-60 minutes."
    },
    {
      title: "Pizhichil",
      description: "Pizhichil is a luxurious Ayurvedic therapy involving the continuous pouring of warm medicated oil over the body while positioning it in seven different postures. The session begins with a full-body massage, followed by a therapeutic warm bath."
    },
    {
      title: "Udwarthanam",
      description: "In this therapy, herbal powders are mixed with warm oil and massaged into the body with firm, moderate pressure. It is beneficial for weight management, skin disorders, joint and muscle conditions, and inflammatory issues."
    },
    {
      title: "Swedanam",
      description: "Swedanam is a cleansing and stress-relieving therapy that promotes detoxification. It is particularly effective for ailments such as asthma, digestive issues, inflammation, and weight management. Each of these Ayurvedic therapies is carefully designed to restore balance and promote holistic well-being."
    }
  ];

  return (
    <div className='px-[40px] sm:px-[50px] md:px-[100px] xl:px-[160px] 2xl:px-[196px]'>
      <h1 className='text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-[48px] font-semibold text-center text-[#09B438] pb-[37px]'>
        Types of Ayurvedic Therapies
      </h1>

      {therapies.map((therapy, index) => (
        <div key={index} className='w-full bg-[#E7F8EC] border-[1px] border-[#999999] rounded-[15px] px-[13px] md:px-[26px] lg:px-[36px] xl:px-[66px] pt-[11px] pb-[23px] mb-6'>
          <h1 className='text-black text-[24px] sm:text-[30px] xl:text-[40px] font-semibold text-center pb-[8px]'>
            {therapy.title}
          </h1>
          <p className='text-[14px] md:text-[16px] xl:text-[20px] 2xl:text-[24px] font-light text-black leading-[140%] text-center'>
            {therapy.description}
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
