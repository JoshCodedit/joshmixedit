import mixingImage from '../assets/images/misc/Image 15-01-2025 at 15.41.png';
import masteringImage from '../assets/images/misc/Image 15-01-2025 at 15.42.png';
import mixMasterImage from '../assets/images/misc/Image 15-01-2025 at 15.42 (1).png';

export default function ServicesComponent() {
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
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingCards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
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

              <button className="mt-8 w-full bg-crimson text-white py-2 px-4 rounded-lg hover:bg-mulberry transition-colors">
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
