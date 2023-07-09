import Image from 'next/image';
import HeartButton from './HeartButton';

import { AiFillStar } from 'react-icons/ai';

export type Listing = {
  id: string;
  host: {
    name: string;
    gender: string;
    age: number;
  };
  img: string;
  location: string;
  availability: string;
  price: number;
  rating: number;
  distance: string;
  category: string;
  timeOfDay: string;
};

export default function ListingCard({
  img,
  location,
  price,
  distance,
  availability,
  timeOfDay,
  rating,
}: Listing) {
  return (
    <div className='col-span-1 cursor-pointer'>
      <div className='flex flex-col w-full'>
        <div className='w-full relative overflow-hidden rounded-xl aspect-square'>
          <Image
            fill
            className='object-cover h-full w-full group-hover:scale-110 transition'
            src={img}
            alt={location}
          />
          <div className='absolute top-3 right-3'>
            <HeartButton />
          </div>
        </div>
        <div className='mt-2'>
          <div className='flex justify-between'>
            <div className='font-medium text-sm'>{location}</div>
            <div className='flex items-center font-light text-sm'>
              <AiFillStar size={16} />
              <span className='ml-1'>{rating}</span>
            </div>
          </div>
          <div className='text-neutral-500 text-sm'>{`${distance} away`}</div>
          <div className='text-neutral-500 text-sm'>{availability}</div>
          <div className='mt-2'>
            <span className='font-medium text-sm mr-1'>${price}</span>
            <span className='font-light text-sm'>{timeOfDay}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
