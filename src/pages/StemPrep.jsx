import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import {
  HiOutlineLightBulb,
  HiOutlineAdjustments,
  HiOutlineDownload,
  HiOutlineUpload,
} from 'react-icons/hi';

export default function StemPrep() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'organising', label: 'Organising Your Session' },
    { id: 'bouncing', label: 'Bouncing Stems' },
    { id: 'sending', label: 'Sending Files' },
  ];

  const tabIcons = {
    overview: <HiOutlineLightBulb className="text-4xl text-crimson" />,
    organising: <HiOutlineAdjustments className="text-4xl text-crimson" />,
    bouncing: <HiOutlineDownload className="text-4xl text-crimson" />,
    sending: <HiOutlineUpload className="text-4xl text-crimson" />,
  };

  const tabContent = {
    overview: (
      <>
        <p className="mb-4">
          Preparing your stems correctly is a vital part of getting the best
          possible mix. A well-organised and clearly labelled session not only
          helps me work more efficiently, but also ensures your creative vision
          comes through exactly as intended.
        </p>
        <p>
          It’s not just about recording your track well — how you bounce and
          deliver your stems plays a significant role in the final result. In
          this guide, I’ll walk you through how to label, export, and send your
          files, along with any supporting materials that will help me mix your
          track to the highest standard.
        </p>
      </>
    ),
    organising: (
      <>
        <p className="mb-4">
          Before exporting anything, take the time to tidy up your session.
          Every track should be clearly labelled — for example, “HiHat L” if
          it’s panned left, or “Backing Vocal” for supporting parts. Avoid
          generic names like “Audio 1” or “Track 5”, as they make the mixing
          process slower and more prone to error.
        </p>
        <p>
          Remove any unused, muted, or duplicate tracks. It’s easy to
          accidentally include a muted track in a bounce, and if it’s in the
          folder, I’ll assume it’s meant to be part of the song. To be safe,
          listen back to the bounced stems before sending them. I’ve had
          situations where older or incorrect versions were sent by mistake,
          which can be avoided with a quick check.
        </p>
      </>
    ),
    bouncing: (
      <>
        <p className="mb-4">
          When exporting your stems, use WAV files at 32-bit float if possible,
          or 24-bit if not. The sample rate should match your session — I
          recommend 48kHz where practical.
        </p>
        <p className="mb-4">
          All instrumental tracks should be bounced with effects (wet). This
          includes reverb, delay, and any other processing that contributes to
          the overall feel of the track. I don’t want to lose the atmosphere of
          your mix by trying to recreate effects you’ve already crafted. Vocals,
          on the other hand, should be sent dry, without reverb or delay, unless
          otherwise discussed. You can include a wet version for reference if
          you like.
        </p>
        <p>
          Each element should be bounced as its own stem. If you’ve layered
          sounds — for example, a kick made from several samples — and the blend
          is part of the sound, bounce them as a single stem. Lastly, make sure
          no track is clipping. All stems should be clean and peak safely below
          0dBFS.
        </p>
      </>
    ),
    sending: (
      <>
        <p className="mb-4">
          Once your stems are ready, place them all into a single folder. This
          folder should also include a rough or demo mix, as it helps give
          context for how you’ve been hearing the track.
        </p>
        <p>
          Include a brief document (a text or Word file) with any relevant notes
          — the tempo, key (if known), time signature, and any creative
          direction or references you'd like me to keep in mind. When
          everything’s in place, upload the folder via a file-sharing service
          such as WeTransfer, Google Drive, or Dropbox.
        </p>
      </>
    ),
  };

  return (
    <div>
      <ScrollToTop />
      <h2 className="section-heading">Preparing Your Stems</h2>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 py-16 md:items-center relative">
        {/* Tabs */}
        <div
          className="md:w-96 space-y-4 mr-12 mx-auto my-auto"
          role="tablist"
          aria-orientation="vertical"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-between gap-3 h-16 w-full px-4 py-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-crimson
              ${
                activeTab === tab.id
                  ? 'bg-crimson text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center 
                ${activeTab === tab.id ? 'border-white bg-white' : 'border-gray-500'}`}
              >
                {activeTab === tab.id && (
                  <span className="w-2 h-2 rounded-full bg-crimson" />
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative md:w-3/4 border-t md:border-t-0 md:border-l pl-0 md:pl-20 pt-10 md:pt-0 min-h-[450px] flex flex-col justify-center">
          {/* Icon at Top Right */}

          <div className="transition-opacity duration-300 ease-in-out opacity-100 pr-10">
            <div className="absolute top-0 hover:scale-105 transform transition-all duration-200">
              {tabIcons[activeTab]}
            </div>
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
      <Link
        to="/Contact"
        className="bg-crimson text-white max-w-[233px] px-6 py-2 mb-12 rounded-md hover:scale-105 hover:shadow-lg transform transition-all duration-200 block mx-auto text-center"
      >
        Contact Me
      </Link>
    </div>
  );
}
