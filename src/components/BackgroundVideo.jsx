export default function BackgroundVideo({ videoSrc }) {
  return (
    <div className="absolute inset-0 -z-10">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
