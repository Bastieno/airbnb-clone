import { HiMenu, HiOutlineGlobeAlt, HiUserCircle } from 'react-icons/hi';

export default function UserMenu() {
  return (
    <div className='relative hidden md:block'>
      <div className='flex flex-row items-center gap-3'>
        <div
          className='
            hidden
            md:block
            text-sm
            font-regular
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          '
        >
          Airbnb your home
        </div>
        <div className='mr-2'>
          <HiOutlineGlobeAlt size={20} />
        </div>
        <div
          className='
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          '
        >
          <HiMenu size={20} />
          <HiUserCircle size={28} />
        </div>
      </div>
    </div>
  );
}
