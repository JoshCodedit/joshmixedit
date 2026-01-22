import josh from '../assets/images/logos/josh.png';
import mixedIt from '../assets/images/logos/mixedIt.png';

export default function LogoComponent() {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <img
        src={josh}
        alt="Description"
        className="w-[262.5px] h-[85px] -ml-1"
      />
      <img src={mixedIt} alt="Description" className="w-[375px] h-[62.5px]" />
    </div>
  );
}
