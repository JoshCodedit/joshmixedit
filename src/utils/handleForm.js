import emailjs from '@emailjs/browser';

export default function handleForm(formType, formData) {
  const serviceID = 'service_dpstbyj';
  const templateID = 'template_br52kac';
  const publicKey = '0T0AGWZHa0xYVrcAA';

  const subjects = {
    mix: 'Mix Enquiry',
    master: 'Master Enquiry',
    mixAndMaster: 'Mix & Master Enquiry',
  };

  const templateParams = {
    name: formData.name,
    subject: subjects[formType],
    email: formData.email,
    demoLink: formData.demoLink,
    message: formData.message,
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
}
