import React from "react";

function page() {
  return (
    <div className=" mx-[50px] lg:mx-[100px] xl:mx-[170px] 2xl:mx-[196px]">
      <h1 className="text-[32px] xl:text-[42px] text-[#333333] font-semibold text-center pt-[54px]">
        Contact us
      </h1>
      <p className="text-[16px] xl:text-[20px] text-[#333333] text-center leading-[120%] pt-[10px] pb-[67px] ">
        Reach out to us anytime—
        <br />
        find our location, send a message, or drop us a note.
      </p>

      <div>
        <div className=" bg-[#09B438]  rounded-t-[20px]">
          <img src="/assets/location-map.svg" alt="map" className="w-full bg-cover py-10" />
        </div>
        <div className="w-full bg-white flex justify-between gap-x-4 py-[32px]">
          <span className=" flex gap-x-3 2xl:gap-x-8 p-4 border-[1px] border-[#999999] rounded-[10px]">
            <img src="/assets/airplane.svg" alt="airplane" />
            <p className="text-[14px] 2xl:text-[16px] text-[#333333]">
              From Cochin International Airport
            </p>
            <span className="text-[14px] 2xl:text-[16px] text-[#333333]">67 Km</span>
          </span>
          <span className=" flex  gap-x-3 2xl:gap-x-8 p-4 border-[1px] border-[#999999] rounded-[10px]">
            <img src="/assets/train.svg" alt="train" />
            <p className="text-[14px] 2xl:text-[16px] text-[#333333]">
              From Kottayam Railway Station
            </p>
            <span className="text-[14px] 2xl:text-[16px] text-[#333333]">35 Km</span>
          </span>
          <span className=" flex gap-x-8 p-4 border-[1px] border-[#999999] rounded-[10px]">
            <span className="text-[14px] 2xl:text-[16px] text-[#333333]">
              Get Directions on Google Map
            </span>
          </span>
        </div>
        <div className="w-full bg-[#09B438] flex rounded-b-[20px] px-[45px] 2xl:px-[65px] pt-[56px] pb-[77px] ">
          <div className="w-1/2">
            <h1 className="text-white text-[28px] 2xl:text-[32px] font-semibold">Address</h1>
            <p className="text-white text-[18px] 2xl:text-[20px] pt-[15px] pb-[12px]">
              Lifeline Ayurveda
              <br />
              Kollappally - Melukavu Road
              <br />
              Kollappally Jn, Kadanadu P.O
              <br />
              Pala, Kerala - 686 653
            </p>
            <span className="text-white text-[18px] 2xl:text-[20px]">Tel: 91 - 8156806004</span>
          </div>
          <div className="w-1/2 flex flex-col justify-center ps-14">
            <h1 className="text-white text-[28px] 2xl:text-[32px]text-[32px] font-semibold leading-[120%]">
              Do you have any <br />
              questions?
            </h1>
            <p className="text-white text-[16px] leading-[120%] pt-4">
              Please fill out the details below and send <br />
              them to us—we will get back to you shortly.
            </p>
          </div>
        </div>
      </div>


      <div className="w-full flex border-[1px] border-[#999999] rounded-[20px] my-[32px]">
          <div className="w-1/2 overflow-hidden border-l-[1px] border-[#999999] rounded-l-[20px]">
<img src="/assets/contact.svg" alt="contact" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 flex flex-col gap-y-[14px] 2xl:gap-y-[16px] ps-[42px] 2xl:ps-[82px] pe-[40px] lg:pe-[80px] 2xl:pe-[122px] ">
<h1 className="text-[24px] text-[#333333] font-semibold pt-[30px] 2xl:pt-[40px]">Write to us</h1>
<input type="text"
className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333] "
placeholder="Full name"
/>
<input type="email"
className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333] "
placeholder="Email "
/>
<input type="tel"
className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333] "
placeholder="Phone number (With Country Code) "
/>

<select 
className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333] "

>
  <option value="1">Location (Country)</option>
</select>
<select 
className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333] "

>
  <option value="1">Required Service</option>
</select>
<button className="w-full mb-6 h-[40px] 2xl:h-[48px] bg-[#3B7DED] rounded-[10px]  text-[14px] 2xl:text-[16px] text-white">
Send
</button>
          </div>
      </div>

    </div>
  );
}

export default page;
