import { useSearchParams } from 'next/navigation';

import Container from '../Container';
import CategoryItem from './CategoryItem';
import { categories } from '@/app/data/categories';
import Filters from './Filters';

export default function CategoryList() {
  const params = useSearchParams();
  const category = params?.get('category');
  return (
    <Container>
      <div className='flex items-center gap-8'>
        <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto scrollbar-hide'>
          {categories.map((item) => (
            <CategoryItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
        <Filters />
      </div>
    </Container>
  );
}
