import { useMemo } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useAppContext } from '@/app/providers/AppProvider';
import type { Listing } from './ListingCard';

type HeartButtonProps = {
  listingId: Listing['id'];
};

export default function HeartButton({ listingId }: HeartButtonProps) {
  const { likedListingIds, toggleListingId } = useAppContext();

  const isLiked = useMemo(
    () => likedListingIds.includes(listingId),
    [likedListingIds, listingId]
  );

  return (
    <div
      onClick={() => toggleListingId(listingId)}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        className='fill-white absolute -top-[2px] -right-[2px]'
        size={28}
      />
      <AiFillHeart
        size={24}
        className={isLiked ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  );
}
