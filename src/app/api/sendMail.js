const emailjs = require("emailjs-com");

export const sendEmails = async (formData) => {
  try {
    
    const publicKey = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`;
    const serviceId = `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`;
    const templateId = `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`;
    const email = `${process.env.NEXT_PUBLIC_EMAIL}`;

    if (!publicKey || !serviceId || !templateId) {
      throw new Error("Missing EmailJS environment variables");
    }
    const mail = { ...formData, to_email: email };    
    await emailjs.send(serviceId, templateId, mail, publicKey);

    return { success: true, message: "Emails sent successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to send emails." };
  }
};
