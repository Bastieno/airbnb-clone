import { HiOutlineGlobeAlt, HiChevronUp } from 'react-icons/hi';
import Container from './Container';

export default function Footer() {
  return (
    <div
      className={`
        hidden
        md:block
        fixed
        bottom-0
        left-0
        w-[100%]
        shadow-md
        border-t-[1px]
        py-4
        bg-white
        font-light
      `}
    >
      <Container>
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
          <div className='flex flex-row flex-wrap justify-center md:gap-1 lg:gap-2 text-sm text-gray-900'>
            <span>© 2023 Airbnb, Inc.</span>
            <span className='with-dot'>Terms</span>
            <span className='with-dot'>Sitemap</span>
            <span className='with-dot'>Privacy</span>
            <span className='with-dot'>Your Privacy choices</span>
            <span className='with-dot'>Destinations</span>
          </div>
          <div className='flex flex-row items-center justify-end gap-3 font-medium text-sm text-gray-800 min-w-[350px]'>
            <div className='flex'>
              <HiOutlineGlobeAlt size={20} />
              <span className='ml-2'>English (US)</span>
            </div>
            <div className=''>{`$ USD`}</div>
            <div className='flex items-center'>
              <span className=''>Support & resources</span>
              <HiChevronUp size={22} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
