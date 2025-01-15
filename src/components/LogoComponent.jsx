import josh from '../assets/images/logos/josh.png';
import mixedIt from '../assets/images/logos/mixedIt.png';

export default function LogoComponent() {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <img src={josh} alt="Description" className="w-[210px] h-[68px]" />
      <img src={mixedIt} alt="Description" className="w-[300px] h-[50px]" />
    </div>
  );
}
