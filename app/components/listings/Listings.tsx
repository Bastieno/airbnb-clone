/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState, useRef, useCallback } from 'react';

import ListingCard from './ListingCard';
import type { Listing } from './ListingCard';
import ListingCardSkeleton from './ListingCardSkeleton';

import { fetchListings } from '@/app/utils';

const initialSkeletonList = new Array(10).fill(0);

export default function Listings() {
  const [loading, setLoading] = useState(true);
  const [skeletonList, setSkeletonList] = useState<Array<number>>([]);
  const [list, setList] = useState<Array<Listing>>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setSkeletonList(initialSkeletonList);
    const newData = await fetchListings(list.length);
    setList((data) => data.concat(newData));
    setSkeletonList([]);
    setLoading(false);
  }, [list.length]);

  useEffect(() => {
    fetchData();
  }, []);

  // Create a ref and attach it to a node at the end of the listings
  // We observe this node using IntersectionObserver and
  // load more data when the node comes into view.
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observingNode = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    if (observingNode) {
      observer.observe(observingNode);
    }

    return () => {
      if (observingNode) {
        observer.unobserve(observingNode);
      }
    };
  }, [observerTarget]);

  return (
    <div
      className='
        pt-[200px]
        pb-[75px]
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
      {list.map((listing: Listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
      {loading && skeletonList.map((_, i) => <ListingCardSkeleton key={i} />)}
      <div ref={observerTarget}></div>
    </div>
  );
}
