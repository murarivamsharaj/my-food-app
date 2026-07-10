import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_pei4lrp",
    "template_lhqovpb",
    order,
    "t7K7x2NgXITqAxggZ",
  );
};