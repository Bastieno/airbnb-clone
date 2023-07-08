import { RiEqualizerLine } from 'react-icons/ri';

export default function Filters() {
  return (
    <div
      className='
          hidden md:flex
          items-center
          justify-center
          min-w-[90px]
          py-1
          px-2
          border-[1px]
          border-neutral-200
          gap-2
          rounded-xl
          cursor-pointer
          hover:shadow-md
          transition
          h-[48px]
          '
    >
      <RiEqualizerLine size={18} />
      Filters
    </div>
  );
}
