import React from "react";

function Section5() {
  return (
    <div className="px-[16px] sm:px-[50px] lg:px-[100px] 2xl:px-[196px]">
      <h1 className="text-[16px] sm:text-[20px] text-[#09B438] font-bold text-center pt-4 sm:pt-0">
        TESTIMONIALS
      </h1>
      <h1 className="text-[32px]  xl:text-[42px] text-[#333333] font-semibold text-center">
        What they say’s <span className="hidden sm:inline">about us</span>
      </h1>
      <h1 className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#333333] text-center">
        Real stories of healing and wellness from our satisfied customers
      </h1>
      <div className="pt-[20px] flex flex-col sm:flex-row gap-y-4 gap-x-4  xl:gap-x-8">
        <div className="w-full sm:w-1/2 border-[1px] border-[#999999] rounded-[10px] px-6 sm:px-4 lg:ps-9 xl:ps-[66px] lg:pe-[23px]">
          <img
            src="/assets/double-quotes.svg"
            alt="img"
            className="py-[24px] sm:pt-[48px] sm:pb-[19px]"
          />
          <p className="text-[14px] sm:text-[16px] text-[#333333] font-light leading-[140%]">
            Dreaming of a nursing career but worried about the cost? We offer
            financially struggling yet academically bright students a unique
            opportunity: free nursing education in Karnataka, supported by a
            part-time job.
            <br />
            With your job earnings, you can cover your college fees.
          </p>
          <h2 className="text-[16px] text-[#333333] font-semibold pt-[24px] sm:pt-[18px] pb-[4px]">
            Keerthy Raghunath
          </h2>
          <h3 className="text-[14px] text-[#333333] pb-[25px]">Alappuzha</h3>
        </div>

        <div className="w-full sm:w-1/2 border-[1px] border-[#999999] rounded-[10px] px-6 sm:px-4 lg:ps-9 xl:ps-[66px] lg:pe-[23px]">
          <img
            src="/assets/double-quotes.svg"
            alt="img"
            className="py-[24px] sm:pt-[48px] sm:pb-[19px]"
          />
          <p className="text-[14px] sm:text-[16px] text-[#333333] font-light leading-[140%]">
            Dreaming of a nursing career but worried about the cost? We offer
            financially struggling yet academically bright students a unique
            opportunity: free nursing education in Karnataka, supported by a
            part-time job.
            <br />
            With your job earnings, you can cover your college fees.
          </p>
          <h2 className="text-[16px] text-[#333333] font-semibold pt-[24px] sm:pt-[18px] pb-[4px]">
           Rahul Singh
          </h2>
          <h3 className="text-[14px] text-[#333333] pb-[25px]">Pune</h3>
        </div>
      </div>
    </div>
  );
}

export default Section5;
