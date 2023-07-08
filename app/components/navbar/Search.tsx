import { BiSearch } from 'react-icons/bi';

export default function Search() {
  return (
    <div
      className='
        border-[1px]
        w-full
        md:w-[330px]
        lg:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      '
    >
      <div className='flex flex-row items-center justify-between'>
        <div className='text-sm md:truncate px-4 w-[120px] lg:w-auto'>
          Anywhere
        </div>
        <div className='hidden sm:block md:truncate text-sm px-4 border-x-[1px] text-center w-[120px]'>
          Any week
        </div>
        <div className='text-sm px-2 text-gray-600 flex flex-row items-center gap-3'>
          <div className='hidden sm:block md:truncate px-2 w-[90px] lg:w-auto'>
            Add guests
          </div>
          <div className='p-2 bg-rose-500 rounded-full text-white'>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
