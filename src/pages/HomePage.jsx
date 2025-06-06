import BackgroundVideo from '../components/BackgroundVideo';
import MyWorkComponent from '../components/MyWorkComponent';
import ServicesComponent from '../components/ServicesComponent';
import AboutMe from '../components/AboutMe';
import headerMp4 from '../assets/videos/siteHeader0001-0598.mp4';
import LogoComponent from '../components/LogoComponent';
import { React, useState } from 'react';
import { HiSpeakerWave } from 'react-icons/hi2';
import { DynamicEnquiryModal } from '../modals/DynamicEnquiryModal';
import handleForm from '../utils/handleForm';
import ScrollToTop from '../utils/ScrollToTop';

export default function HomePage() {
  const [openModal, setOpenModal] = useState(null);
  return (
    <>
      <ScrollToTop />
      <div className="relative min-h-[85vh]">
        <BackgroundVideo videoSrc={headerMp4} />
        <div className="absolute inset-0 z-10 flex items-center justify-center flex-col">
          <LogoComponent />
          <p className="text-center text-white text-2xl font-bold tracking-wider">
            MIX AND MASTER SERVICES
          </p>
          <button
            className="bg-crimson text-white px-4 py-2 my-3 rounded-md hover:scale-105 hover:shadow-lg transform transition-all duration-200"
            onClick={() => setOpenModal('mixAndMaster')}
          >
            REQUEST A MIX & MASTER
          </button>
          <button className="bg-white text-crimson px-5 py-2 rounded-md flex items-center gap-2 hover:scale-105 hover:shadow-lg transform transition-all duration-200">
            <HiSpeakerWave className="text-xl" /> LISTEN TO EXAMPLES
          </button>
        </div>
      </div>
      <section className="my-20">
        <h2 className="section-heading">MY WORK</h2>
        <MyWorkComponent />
      </section>
      <section className="my-20">
        <h2 className="section-heading">SERVICES</h2>
        <ServicesComponent />
      </section>
      <section>
        <h2 className="section-heading">About Me</h2>
        <AboutMe />
      </section>

      <DynamicEnquiryModal
        isOpen={openModal === 'mixAndMaster'}
        onClose={() => setOpenModal(null)}
        onSubmit={(formData) => handleForm('mixAndMaster', formData)}
        title="Mix & Master Enquiry"
        hiddenValue="mix-and-master-enquiry"
      />
    </>
  );
}
