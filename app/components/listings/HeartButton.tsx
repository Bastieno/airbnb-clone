import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function HeartButton() {
  return (
    <div className='relative hover:opacity-80 transition cursor-pointer'>
      <AiOutlineHeart
        className='fill-white absolute -top-[2px] -right-[2px]'
        size={28}
      />
      <AiFillHeart size={24} className='fill-neutral-500/70' />
    </div>
  );
}
