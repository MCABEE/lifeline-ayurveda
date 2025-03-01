// import Link from "next/link";
// import React from "react";

// function page() {
//   return (
//     <div className="max-w-[1800px] mx-auto">
//       <div className=" mx-[16px] sm:mx-[50px] lg:mx-[100px] xl:mx-[170px] 2xl:mx-[196px]">
//         <h1 className="text-[32px] xl:text-[42px] text-[#333333] font-semibold text-center pt-[24px] sm:pt-[54px]">
//           Contact us
//         </h1>
//         <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#333333] text-center leading-[120%] px-2 sm:px-0 pt-[3px] sm:pt-[10px] pb-5 sm:pb-7 lg:pb-[67px] ">
//           Reach out to us anytime—
//           <br className="hidden sm:inline" />
//           find our location, send a message, or drop us a note.
//         </p>

//         <div>
//           <div className=" bg-[#09B438] h-[360px] sm:h-auto rounded-t-[20px]">
//             {/* <img
//             src="/assets/location-map.svg"
//             alt="map"
//             className="w-full h-full object-cover py-10"
//           /> */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864.084241947357!2d76.69905415!3d9.762499700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cee5350f8571%3A0x37239a828a36feeb!2sKollapally%2C%20Kerala!5e0!3m2!1sen!2sin!4v1740744407773!5m2!1sen!2sin"
//               loading="lazy"
//               className=" w-full h-[360px] sm:h-[500px] py-10"
//             ></iframe>
//           </div>
//           <div className="w-[280px] sm:w-[350px] lg:w-full mx-auto bg-white flex flex-col lg:flex-row justify-between gap-y-4 gap-x-4 py-[32px]">
//             <span className=" flex flex-col sm:flex-row order-2 gap-x-3 2xl:gap-x-8 p-4 px-[28px]  border-[1px] border-[#999999] rounded-[10px]">
//               <img
//                 src="/assets/airplane.svg"
//                 alt="airplane"
//                 className="hidden sm:inline"
//               />
//               <div className="sm:hidden flex justify-between font-semibold ">
//                 <img src="/assets/airplane.svg" alt="airplane" className="" />
//                 <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333]">
//                   67 Km
//                 </span>
//               </div>
//               <p className="text-[16px] sm:text-[14px] 2xl:text-[16px] pt-1 sm:pt-0 text-[#333333]">
//                 From <br className="sm:hidden inline" />
//                 Cochin International Airport
//               </p>
//               <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] hidden sm:inline">
//                 67 Km
//               </span>
//             </span>
//             <span className=" flex flex-col sm:flex-row order-3  gap-x-3 2xl:gap-x-8 p-4 px-[28px]  border-[1px] border-[#999999] rounded-[10px]">
//               <img
//                 src="/assets/train.svg"
//                 alt="train"
//                 className="hidden sm:inline"
//               />

//               <div className="sm:hidden flex  justify-between font-semibold  ">
//                 <img src="/assets/train.svg" alt="train" className="" />
//                 <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333]">
//                   35 Km
//                 </span>
//               </div>
//               <p className="text-[16px] sm:text-[14px] 2xl:text-[16px] pt-1 sm:pt-0 text-[#333333]">
//                 From <br className="sm:hidden inline" />
//                 Kottayam Railway Station
//               </p>
//               <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] hidden sm:inline">
//                 35 Km
//               </span>
//             </span>
//             <a
//             target="_blank"
//              href="https://www.google.com/maps/place/Kollapally,+Kerala/@9.7624997,76.6990541,16z/data=!3m1!4b1!4m6!3m5!1s0x3b07cee5350f8571:0x37239a828a36feeb!8m2!3d9.7637176!4d76.6961305!16s%2Fm%2F0_yhp47?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D">
//                  <span className=" order-1 lg:order-none flex gap-x-8 p-4 px-6  border-[1px] border-[#999999] rounded-[10px]">
//               <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] ">
//                 Get Directions on Google Map
//               </span>
//             </span>
//             </a>
           
//           </div>
//           <div className="w-full bg-[#09B438] flex flex-col md:flex-row rounded-b-[20px] md:px-[45px] 2xl:px-[65px] pt-[27px] sm:pt-[56px] pb-[32px] sm:pb-[77px] ">
//             <div className="md:w-1/2 border-b-[0.4px] md:border-none px-[24px] md:px-0 border-white pb-[33px] md:pb-0">
//               <h1 className="text-white text-[24px] sm:text-[28px] 2xl:text-[32px] font-semibold">
//                 Address
//               </h1>
//               <p className="text-white text-[16px] sm:text-[18px] 2xl:text-[20px] pt-[15px] pb-[12px]">
//                 Lifeline Ayurveda
//                 <br />
//                 Kollappally - Melukavu Road
//                 <br />
//                 Kollappally Jn, Kadanadu P.O
//                 <br />
//                 Pala, Kerala - 686 653
//               </p>
//               <span className="text-white text-[16px] sm:text-[18px] 2xl:text-[20px] ">
//                 Tel: 91 - 8156806004
//               </span>
//             </div>
//             <div className=" md:w-1/2 flex flex-col md:justify-center px-[24px] md:px-0 md:ps-14 pt-[27px] md:pt-0">
//               <h1 className="text-white text-[24px] sm:text-[28px] 2xl:text-[32px]text-[32px] font-semibold leading-[120%]">
//                 Do you have any <br />
//                 questions?
//               </h1>
//               <p className="text-white text-[14px] sm:text-[16px] leading-[120%] pt-4">
//                 Please fill out the details below and send <br />
//                 them to us—we will get back to you shortly.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* contact form */}
//         <div className="w-full flex flex-col md:flex-row border-[1px] border-[#999999] rounded-[15px] md:rounded-[20px] my-[32px]">
//           <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden border-l-[1px] border-[#999999] rounded-t-[15px] md:rounded-tr-none md:rounded-l-[20px]">
//             <img
//               src="/assets/contact.svg"
//               alt="contact"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="md:w-1/2 flex flex-col gap-y-4 px-6 sm:px-0 sm:gap-y-[14px] 2xl:gap-y-[16px] sm:ps-[42px] 2xl:ps-[82px] sm:pe-[40px] lg:pe-[80px] 2xl:pe-[122px] ">
//             <h1 className="text-[20px] sm:text-[24px] text-[#333333] font-semibold pt-[30px] 2xl:pt-[40px]">
//               Write to us
//             </h1>
//             <input
//               type="text"
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333] "
//               placeholder="Full name"
//             />
//             <input
//               type="email"
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333] "
//               placeholder="Email "
//             />
//             <input
//               type="tel"
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333] "
//               placeholder="Phone number (With Country Code) "
//             />

//             <select className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333] ">
//               <option value="1">Location (Country)</option>
//             </select>
//             <select className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333] ">
//               <option value="1">Required Service</option>
//             </select>
//             <button className="w-full mb-12 sm:mb-6 mt-2 h-[40px] 2xl:h-[48px] bg-[#3B7DED] rounded-[10px]  text-[14px] 2xl:text-[16px] text-white">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;


















// "use client";

// import React, { useState } from "react";
// // import { sendEmails } from "@/app/api/sendMail";
// import { sendEmails } from "../api/sendMail";
// function ContactPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     location: "",
//     service: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setMessage("");

//   //   try {
//   //     const response = await sendEmails(formData);
//   //     if (response.success) {
//   //       setMessage("Email sent successfully!");
//   //     } else {
//   //       setMessage("Failed to send email. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     setMessage("Error sending email.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setMessage("");
  
//   //   try {
//   //     const response = await sendEmails(formData);
//   //     if (response.success) {
//   //       setMessage("Email sent successfully!");
        
//   //       // Reset form fields after successful email send
//   //       setFormData({
//   //         fullName: "",
//   //         email: "",
//   //         phone: "",
//   //         location: "",
//   //         service: "",
//   //       });
//   //     } else {
//   //       setMessage("Failed to send email. Please try again.");
//   //     }
//   //   } catch (error) {
//   //     setMessage("Error sending email.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");
  
//     try {
//       // Make a POST request to the API route
//       const response = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // Send the form data as JSON
//       });
  
//       const result = await response.json(); // Handle the JSON response
  
//       if (result.success) {
//         setMessage("Email sent successfully!");
        
//         // Clear the form data after success
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           location: "",
//           service: "",
//         });
//       } else {
//         setMessage(result.message || "Failed to send email. Please try again.");
//       }
//     } catch (error) {
//       setMessage("Error sending email.");
//     } finally {
//       setLoading(false);
//     }
//   };
  
  

//   return (
//     <div className="max-w-[1800px] mx-auto">
//       <div className="mx-[16px] sm:mx-[50px] lg:mx-[100px] xl:mx-[170px] 2xl:mx-[196px]">
//       <h1 className="text-[32px] xl:text-[42px] text-[#333333] font-semibold text-center pt-[24px] sm:pt-[54px]">
//           Contact us
//         </h1>
//         <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#333333] text-center leading-[120%] px-2 sm:px-0 pt-[3px] sm:pt-[10px] pb-5 sm:pb-7 lg:pb-[67px] ">
//           Reach out to us anytime—
//           <br className="hidden sm:inline" />
//           find our location, send a message, or drop us a note.
//         </p>

//         <div>
//           <div className=" bg-[#09B438] h-[360px] sm:h-auto rounded-t-[20px]">
//             {/* <img
//             src="/assets/location-map.svg"
//             alt="map"
//             className="w-full h-full object-cover py-10"
//           /> */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864.084241947357!2d76.69905415!3d9.762499700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cee5350f8571%3A0x37239a828a36feeb!2sKollapally%2C%20Kerala!5e0!3m2!1sen!2sin!4v1740744407773!5m2!1sen!2sin"
//               loading="lazy"
//               className=" w-full h-[360px] sm:h-[500px] py-10"
//             ></iframe>
//           </div>
//           <div className="w-[280px] sm:w-[350px] lg:w-full mx-auto bg-white flex flex-col lg:flex-row justify-between gap-y-4 gap-x-4 py-[32px]">
//             <span className=" flex flex-col sm:flex-row order-2 gap-x-3 2xl:gap-x-8 p-4 px-[28px]  border-[1px] border-[#999999] rounded-[10px]">
//               <img
//                 src="/assets/airplane.svg"
//                 alt="airplane"
//                 className="hidden sm:inline"
//               />
//               <div className="sm:hidden flex justify-between font-semibold ">
//                 <img src="/assets/airplane.svg" alt="airplane" className="" />
//                 <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333]">
//                   67 Km
//                 </span>
//               </div>
//               <p className="text-[16px] sm:text-[14px] 2xl:text-[16px] pt-1 sm:pt-0 text-[#333333]">
//                 From <br className="sm:hidden inline" />
//                 Cochin International Airport
//               </p>
//               <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] hidden sm:inline">
//                 67 Km
//               </span>
//             </span>
//             <span className=" flex flex-col sm:flex-row order-3  gap-x-3 2xl:gap-x-8 p-4 px-[28px]  border-[1px] border-[#999999] rounded-[10px]">
//               <img
//                 src="/assets/train.svg"
//                 alt="train"
//                 className="hidden sm:inline"
//               />

//               <div className="sm:hidden flex  justify-between font-semibold  ">
//                 <img src="/assets/train.svg" alt="train" className="" />
//                 <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333]">
//                   35 Km
//                 </span>
//               </div>
//               <p className="text-[16px] sm:text-[14px] 2xl:text-[16px] pt-1 sm:pt-0 text-[#333333]">
//                 From <br className="sm:hidden inline" />
//                 Kottayam Railway Station
//               </p>
//               <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] hidden sm:inline">
//                 35 Km
//               </span>
//             </span>
//             <a
//             target="_blank"
//              href="https://www.google.com/maps/place/Kollapally,+Kerala/@9.7624997,76.6990541,16z/data=!3m1!4b1!4m6!3m5!1s0x3b07cee5350f8571:0x37239a828a36feeb!8m2!3d9.7637176!4d76.6961305!16s%2Fm%2F0_yhp47?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D">
//                  <span className=" order-1 lg:order-none flex gap-x-8 p-4 px-6  border-[1px] border-[#999999] rounded-[10px]">
//               <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] ">
//                 Get Directions on Google Map
//               </span>
//             </span>
//             </a>
           
//           </div>
//           <div className="w-full bg-[#09B438] flex flex-col md:flex-row rounded-b-[20px] md:px-[45px] 2xl:px-[65px] pt-[27px] sm:pt-[56px] pb-[32px] sm:pb-[77px] ">
//             <div className="md:w-1/2 border-b-[0.4px] md:border-none px-[24px] md:px-0 border-white pb-[33px] md:pb-0">
//               <h1 className="text-white text-[24px] sm:text-[28px] 2xl:text-[32px] font-semibold">
//                 Address
//               </h1>
//               <p className="text-white text-[16px] sm:text-[18px] 2xl:text-[20px] pt-[15px] pb-[12px]">
//                 Lifeline Ayurveda
//                 <br />
//                 Kollappally - Melukavu Road
//                 <br />
//                 Kollappally Jn, Kadanadu P.O
//                 <br />
//                 Pala, Kerala - 686 653
//               </p>
//               <span className="text-white text-[16px] sm:text-[18px] 2xl:text-[20px] ">
//                 Tel: 91 - 8156806004
//               </span>
//             </div>
//             <div className=" md:w-1/2 flex flex-col md:justify-center px-[24px] md:px-0 md:ps-14 pt-[27px] md:pt-0">
//               <h1 className="text-white text-[24px] sm:text-[28px] 2xl:text-[32px]text-[32px] font-semibold leading-[120%]">
//                 Do you have any <br />
//                 questions?
//               </h1>
//               <p className="text-white text-[14px] sm:text-[16px] leading-[120%] pt-4">
//                 Please fill out the details below and send <br />
//                 them to us—we will get back to you shortly.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form
//           className="w-full flex flex-col md:flex-row border-[1px] border-[#999999] rounded-[15px] md:rounded-[20px] my-[32px]"
//           onSubmit={handleSubmit}
//         >
//           <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden border-l-[1px] border-[#999999] rounded-t-[15px] md:rounded-tr-none md:rounded-l-[20px]">
//             <img
//               src="/assets/contact.svg"
//               alt="contact"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="md:w-1/2 flex flex-col gap-y-4 px-6 sm:px-0 sm:gap-y-[14px] 2xl:gap-y-[16px] sm:ps-[42px] 2xl:ps-[82px] sm:pe-[40px] lg:pe-[80px] 2xl:pe-[122px] ">
//             <h1 className="text-[20px] sm:text-[24px] text-[#333333] font-semibold pt-[30px] 2xl:pt-[40px]">
//               Write to us
//             </h1>

//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
//               placeholder="Full name"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
//               placeholder="Email"
//               required
//             />

//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
//               placeholder="Phone number (With Country Code)"
//               required
//             />

//             {/* <select
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333]"
//               required
//             >
//               <option value="">Select Location</option>
//               <option value="India">India</option>
//               <option value="USA">USA</option>
//             </select> */}

// <input
//   type="text"
//   name="location"
//   value={formData.location}
//   onChange={handleChange}
//   className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
//   placeholder=" Location (country)"
//   required
// />


//             <select
//               name="service"
//               value={formData.service}
//               onChange={handleChange}
//               className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333]"
//               required
//             >
//               <option value="">Select Service</option>
//               <option value="Ayurvedic Treatment">Ayurvedic Treatment</option>
//               <option value="Consultation">Consultation</option>
//             </select>

//             <button
//               type="submit"
//               className="w-full mb-12 sm:mb-6 mt-2 h-[40px] 2xl:h-[48px] bg-[#3B7DED] rounded-[10px] text-[14px] 2xl:text-[16px] text-white"
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Send"}
//             </button>

//             {message && (
//               <p className={`text-center pb-4 ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
//                 {message}
//               </p>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactPage;














"use client";

import React, { useState } from "react";
import { sendEmails } from "../api/sendMail";
function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage("");

  //   try {
  //     const response = await sendEmails(formData);
  //     if (response.success) {
  //       setMessage("Email sent successfully!");
  //     } else {
  //       setMessage("Failed to send email. Please try again.");
  //     }
  //   } catch (error) {
  //     setMessage("Error sending email.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
      const response = await sendEmails(formData);
      if (response.success) {
        setMessage("Email sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          service: "",
        });  // Reset the form fields
      } else {
        setMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending email.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-[1800px] mx-auto">
          <div className="mx-[16px] sm:mx-[50px] lg:mx-[100px] xl:mx-[170px] 2xl:mx-[196px]">
       <h1 className="text-[32px] xl:text-[42px] text-[#333333] font-semibold text-center pt-[24px] sm:pt-[54px]">
           Contact us
         </h1>
         <p className="text-[14px] sm:text-[16px] xl:text-[20px] text-[#333333] text-center leading-[120%] px-2 sm:px-0 pt-[3px] sm:pt-[10px] pb-5 sm:pb-7 lg:pb-[67px] ">
           Reach out to us anytime—
           <br className="hidden sm:inline" />
           find our location, send a message, or drop us a note.
         </p>

         <div>
           <div className=" bg-[#09B438] h-[360px] sm:h-auto rounded-t-[20px]">
             {/* <img
             src="/assets/location-map.svg"
             alt="map"
             className="w-full h-full object-cover py-10"
           /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864.084241947357!2d76.69905415!3d9.762499700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cee5350f8571%3A0x37239a828a36feeb!2sKollapally%2C%20Kerala!5e0!3m2!1sen!2sin!4v1740744407773!5m2!1sen!2sin"
              loading="lazy"
              className=" w-full h-[360px] sm:h-[500px] py-10"
            ></iframe>
          </div>
          <div className="w-[280px] sm:w-[350px] lg:w-full mx-auto bg-white flex flex-col lg:flex-row justify-between gap-y-4 gap-x-4 py-[32px]">
            <span className=" flex flex-col sm:flex-row order-2 gap-x-3 2xl:gap-x-8 p-4 px-[28px]  border-[1px] border-[#999999] rounded-[10px]">
              <img
                src="/assets/airplane.svg"
                alt="airplane"
                className="hidden sm:inline"
              />
              <div className="sm:hidden flex justify-between font-semibold ">
                <img src="/assets/airplane.svg" alt="airplane" className="" />
                <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333]">
                  67 Km
                </span>
              </div>
              <p className="text-[16px] sm:text-[14px] 2xl:text-[16px] pt-1 sm:pt-0 text-[#333333]">
                From <br className="sm:hidden inline" />
                Cochin International Airport
              </p>
              <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] hidden sm:inline">
                67 Km
              </span>
            </span>
            <span className=" flex flex-col sm:flex-row order-3  gap-x-3 2xl:gap-x-8 p-4 px-[28px]  border-[1px] border-[#999999] rounded-[10px]">
              <img
                src="/assets/train.svg"
                alt="train"
                className="hidden sm:inline"
              />

              <div className="sm:hidden flex  justify-between font-semibold  ">
                <img src="/assets/train.svg" alt="train" className="" />
                <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333]">
                  35 Km
                </span>
              </div>
              <p className="text-[16px] sm:text-[14px] 2xl:text-[16px] pt-1 sm:pt-0 text-[#333333]">
                From <br className="sm:hidden inline" />
                Kottayam Railway Station
              </p>
              <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] hidden sm:inline">
                35 Km
              </span>
            </span>
            <a
            target="_blank"
             href="https://www.google.com/maps/place/Kollapally,+Kerala/@9.7624997,76.6990541,16z/data=!3m1!4b1!4m6!3m5!1s0x3b07cee5350f8571:0x37239a828a36feeb!8m2!3d9.7637176!4d76.6961305!16s%2Fm%2F0_yhp47?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D">
                 <span className=" order-1 lg:order-none flex gap-x-8 p-4 px-6  border-[1px] border-[#999999] rounded-[10px]">
              <span className="text-[16px] sm:text-[14px] 2xl:text-[16px] text-[#333333] ">
                Get Directions on Google Map
              </span>
            </span>
            </a>
           
          </div>
          <div className="w-full bg-[#09B438] flex flex-col md:flex-row rounded-b-[20px] md:px-[45px] 2xl:px-[65px] pt-[27px] sm:pt-[56px] pb-[32px] sm:pb-[77px] ">
            <div className="md:w-1/2 border-b-[0.4px] md:border-none px-[24px] md:px-0 border-white pb-[33px] md:pb-0">
              <h1 className="text-white text-[24px] sm:text-[28px] 2xl:text-[32px] font-semibold">
                Address
              </h1>
              <p className="text-white text-[16px] sm:text-[18px] 2xl:text-[20px] pt-[15px] pb-[12px]">
                Lifeline Ayurveda
                <br />
                Kollappally - Melukavu Road
                <br />
                Kollappally Jn, Kadanadu P.O
                <br />
                Pala, Kerala - 686 653
              </p>
              <span className="text-white text-[16px] sm:text-[18px] 2xl:text-[20px] ">
                Tel: 91 - 8156806004
              </span>
            </div>
            <div className=" md:w-1/2 flex flex-col md:justify-center px-[24px] md:px-0 md:ps-14 pt-[27px] md:pt-0">
              <h1 className="text-white text-[24px] sm:text-[28px] 2xl:text-[32px]text-[32px] font-semibold leading-[120%]">
                Do you have any <br />
                questions?
              </h1>
              <p className="text-white text-[14px] sm:text-[16px] leading-[120%] pt-4">
                Please fill out the details below and send <br />
                them to us—we will get back to you shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="w-full flex flex-col md:flex-row border-[1px] border-[#999999] rounded-[15px] md:rounded-[20px] my-[32px]"
          onSubmit={handleSubmit}
        >
          <div className="md:w-1/2 h-[300px] md:h-auto overflow-hidden border-l-[1px] border-[#999999] rounded-t-[15px] md:rounded-tr-none md:rounded-l-[20px]">
            <img
              src="/assets/contact.svg"
              alt="contact"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-y-4 px-6 sm:px-0 sm:gap-y-[14px] 2xl:gap-y-[16px] sm:ps-[42px] 2xl:ps-[82px] sm:pe-[40px] lg:pe-[80px] 2xl:pe-[122px] ">
            <h1 className="text-[20px] sm:text-[24px] text-[#333333] font-semibold pt-[30px] 2xl:pt-[40px]">
              Write to us
            </h1>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
              placeholder="Email"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
              placeholder="Phone number (With Country Code)"
              required
            />

            {/* <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333]"
              required
            >
              <option value="">Select Location</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select> */}

 <input
  type="text"
  name="location"
  value={formData.location}
  onChange={handleChange}
  className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] placeholder:text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[#333333]"
  placeholder=" Location (country)"
  required
/>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full outline-none h-[40px] 2xl:h-[48px] bg-white px-[19px] sm:px-[28px] 2xl:px-[38px] border-[1px] border-[#999999] rounded-[10px] text-[14px] 2xl:text-[16px] text-[#333333]"
              required
            >
              <option value="">Select Service</option>
              <option value="Ayurvedic Treatment">Ayurvedic Treatment</option>
              <option value="Consultation">Consultation</option>
            </select>

            <button
              type="submit"
              className="w-full mb-12 sm:mb-6 mt-2 h-[40px] 2xl:h-[48px] bg-[#3B7DED] rounded-[10px] text-[14px] 2xl:text-[16px] text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {message && (
              <p className={`text-center pb-4 ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;