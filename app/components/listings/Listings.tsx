import ListingCard from './ListingCard';
import { listings } from '@/app/data/listings';

export default function Listings() {
  return (
    <div
      className='
        pt-[200px]
        pb-[50px]
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-8
      '
    >
      {listings.map((listing: any) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
}
