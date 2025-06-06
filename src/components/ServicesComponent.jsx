import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mixingImage from '../assets/images/misc/Image 15-01-2025 at 15.41.png';
import masteringImage from '../assets/images/misc/Image 15-01-2025 at 15.42.png';
import mixMasterImage from '../assets/images/misc/Image 15-01-2025 at 15.42 (1).png';
import { DynamicEnquiryModal } from '../modals/DynamicEnquiryModal';
import handleForm from '../utils/handleForm';

export default function ServicesComponent() {
  const [openModal, setOpenModal] = useState(null);

  const pricingCards = [
    {
      title: 'Mixing',
      price: '£100',
      image: mixingImage,
      features: [
        'Up to 10 day turnaround',
        'HQ audio files',
        '4 free revisions',
      ],
      type: 'mix',
    },
    {
      title: 'Mastering',
      price: '£30',
      image: masteringImage,
      features: [
        'Up to 7 day turnaround',
        'HQ audio files',
        '4 free revisions',
      ],
      type: 'master',
    },
    {
      title: 'Mix & Master',
      price: '£120',
      image: mixMasterImage,
      features: [
        'Up to 14 day turnaround',
        'HQ audio files',
        '4 free revisions',
        ,
      ],
      type: 'mixAndMaster',
    },
  ];

  return (
    <div className="mx-auto max-w-[78%] px-4 py-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg px-6 py-14 hover:shadow-xl hover:scale-105 transform transition-all duration-200 relative overflow-hidden w-80 mx-auto"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute top-[-22px] left-0 w-full h-[110%] object-cover bg-cover"
            />
            <div className="relative z-10">
              <h3 className="text-xl text-center font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-lg text-center">From:</p>
              <p className="text-3xl text-center font-bold mb-6">
                {card.price}
              </p>
              <ul className="space-y-2">
                {card.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-8 w-full bg-crimson text-white py-2 px-4 rounded-lg hover:bg-mulberry transition-colors"
                onClick={() => setOpenModal(card.type)}
              >
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/StemPrep"
        className="bg-crimson text-white max-w-[233px] px-6 py-2 mt-10 rounded-md hover:scale-105 hover:shadow-lg transform transition-all duration-200 block mx-auto text-center"
      >
        Mix Preparation Guide
      </Link>

      {/* modals */}
      <DynamicEnquiryModal
        isOpen={openModal === 'mix'}
        onClose={() => setOpenModal(null)}
        onSubmit={(formData) => handleForm('mix', formData)}
        title="Mix Enquiry"
        hiddenValue="mix-enquiry"
      />
      <DynamicEnquiryModal
        isOpen={openModal === 'mixAndMaster'}
        onClose={() => setOpenModal(null)}
        onSubmit={(formData) => handleForm('mixAndMaster', formData)}
        title="Mix & Master Enquiry"
        hiddenValue="mix-and-master-enquiry"
      />
      <DynamicEnquiryModal
        isOpen={openModal === 'master'}
        onClose={() => setOpenModal(null)}
        onSubmit={(formData) => handleForm('master', formData)}
        title="Master Enquiry"
        hiddenValue="master-enquiry"
      />
    </div>
  );
}
