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
    <div className="mx-auto max-w-[90%] px-5 py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="border rounded-xl px-8 py-[70px] w-[360px] mx-auto
                   hover:scale-105 hover:shadow-xl
                   transform transition-all duration-200
                   relative overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute top-[-28px] left-0 w-full h-[120%] object-cover bg-cover"
            />

            <div className="relative z-10">
              <h3 className="text-2xl text-center font-semibold mb-5">
                {card.title}
              </h3>

              <p className="text-xl text-center">From:</p>

              <p className="text-4xl text-center font-bold mb-8">
                {card.price}
              </p>

              <ul className="space-y-3">
                {card.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <svg
                      className="w-5 h-5 mr-3 text-white"
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
                className="mt-10 w-full bg-crimson text-white py-[10px] px-5 rounded-xl text-lg
                       hover:bg-mulberry transition-colors"
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
        className="bg-crimson text-white text-lg max-w-[233px] px-6 py-3 mt-10 rounded-xl hover:scale-105 hover:shadow-lg transform transition-all duration-200 block mx-auto text-center"
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
