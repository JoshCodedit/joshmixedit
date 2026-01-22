import aboutMeImage from '../assets/images/misc/about-me.jpg';

export default function AboutMe() {
  return (
    <div className="flex flex-row md:flex-row gap-12 max-w-[85%] m-auto">
      <div
        className="flex flex-col justify-center max-w-2xl mx-auto"
        id="text-container"
      >
        <p className="mb-4">
          With over 12 years of experience in the music industry, I began my
          professional career by opening a recording studio in South London.
          Fresh out of university, my goal was to provide affordable,
          high-quality studio sessions for up-and-coming artists who needed a
          creative space to develop their sound.
        </p>
        <p className="mb-4">
          My client base grew quickly, leading me to work with a wide range of
          exciting new talent, including MOBO and GRM Award–nominated artists.
          Since then, I’ve contributed to songs that have gone on to amass
          millions of streams across multiple platforms.
        </p>
        <p className="mb-4">
          Today, my primary focus is mixing and mastering, helping artists
          achieve polished, release-ready records. However, I still enjoy
          returning to recording sessions when the right artist and project come
          along.
        </p>
      </div>
      <div
        className="max-w-xl mx-auto rounded-xl overflow-hidden"
        id="image-container"
      >
        <img src={aboutMeImage} alt="About Me" />
      </div>
    </div>
  );
}
