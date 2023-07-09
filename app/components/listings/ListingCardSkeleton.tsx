import Image from 'next/image';

export default function ListingCardSkeleton() {
  return (
    <div className='col-span-1 cursor-pointer'>
      <div className='flex flex-col w-full'>
        <div className='w-full relative overflow-hidden rounded-xl aspect-square'>
          <Image
            fill
            className='object-cover h-full w-full'
            src={'/images/light-gray.png'}
            alt='Placeholder image'
          />
        </div>
        <div className='mt-2'>
          <div className='flex justify-between'>
            <div className='skeleton skeleton-text w-[170px]' />
            <div className='skeleton skeleton-text w-[40px]' />
          </div>
          <div className='skeleton skeleton-text w-[130px]' />
          <div className='skeleton skeleton-text w-[100px]' />
          <div className='skeleton skeleton-text w-[70px]' />
        </div>
      </div>
    </div>
  );
}
