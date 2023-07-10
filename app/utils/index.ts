import type { Listing } from '../components/listings/ListingCard';

const locations = [
  'Ngaparou, Senegal',
  'El Pajar, Spain',
  'Lekki, Nigeria',
  'Accra, Ghana',
  'Kumasi, Ghana',
];

const images = [
  'https://a0.muscache.com/im/pictures/bf6cd3f5-512a-43be-9af6-dbecb0d223f7.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/28bcc258-5906-41e2-a3ef-f4fb4bb9ac46.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-741323513869151794/original/ac649dab-dcd4-4e18-aba2-63d8d703c893.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/prohost-api/Hosting-11563465/original/462384e6-61ca-410f-bfe4-4c5e60d80b64.jpeg?im_w=720',
  'https://a0.muscache.com/im/pictures/miso/Hosting-764487884999389592/original/d57ff632-a88b-4afd-a339-778848a352c2.jpeg?im_w=720',
];

const availabilities = [
  'Sep 4 - 11',
  'Aug 28 - Sep 4',
  'Jul 8 - 13',
  'Jul 8 - 14',
  'Oct 8 - 14',
];

const distances = [
  '2,403 kilometers',
  '3105 kilometers',
  '7 kilometers',
  '393 kilometers',
  '555 kilometers',
];

const hostNames = [
  'Jack Mittens',
  'Jane Mons',
  'Luna Weronika',
  'Bella Ishana',
  'Oliver Twist',
];

const genders = ['male', 'female'];
const prices = [135, 453, 342, 610, 570];
const ratings = [4.78, 4.91, 4.8, 3.75, 3.9];
const categories = ['Modern', 'Mansions', 'Countryside', 'Outdoors', 'Beach'];

export function randomInt(start: number, before: number) {
  return start + Math.floor(Math.random() * (before - start));
}

export const getGuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

type Fn = () => Promise<Array<Listing>>;

export const fetchListings: Fn = () => {
  const promise: Promise<Listing[]> = new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 10 }).map((_, i) => {
        return {
          id: getGuid(),
          host: {
            name: hostNames[randomInt(0, 5)],
            gender: genders[randomInt(0, 2)],
            age: randomInt(20, 80),
          },
          img: images[randomInt(0, 5)],
          location: locations[randomInt(0, 5)],
          availability: availabilities[randomInt(0, 5)],
          price: prices[randomInt(0, 5)],
          rating: ratings[randomInt(0, 5)],
          distance: distances[randomInt(0, 5)],
          category: categories[randomInt(0, 5)],
          timeOfDay: 'night',
        };
      });
      resolve(data);
    }, randomInt(1, 3) * 1000);
  });
  return promise;
};
