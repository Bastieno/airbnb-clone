import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import type { Listing } from '../components/listings/ListingCard';

type ListingId = Listing['id'];

type AppContextValue = {
  likedListingIds: Array<ListingId>;
  toggleListingId: (id: ListingId) => void;
};

const AppContext = createContext<AppContextValue>({
  likedListingIds: [],
  toggleListingId: () => {},
});

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [likedListingIds, setLikedListingIds] = useState<Array<ListingId>>([]);

  const toggleListingId = useCallback(
    (listingId: ListingId) => {
      const isLiked = likedListingIds.includes(listingId);
      if (isLiked) {
        setLikedListingIds((prevIds) =>
          prevIds.filter((id) => id !== listingId)
        );
      } else {
        setLikedListingIds((prevIds) => [...prevIds, listingId]);
      }
    },
    [likedListingIds]
  );

  return (
    <AppContext.Provider
      value={{
        likedListingIds,
        toggleListingId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
