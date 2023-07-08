import useScrollDirection from '../hooks/useScrollDirection';
import { actionList } from '../data/actionList';

export default function AppActions() {
  const scrollDir = useScrollDirection();
  const show = scrollDir === 'up' ? 'show' : '';

  return (
    <div
      className={`
        hidden
        fixed
        bottom-0
        left-0
        w-[100%]
        shadow-md
        border-t-[1px]
        px-4
        bg-white
        text-gray-500
        ${show}
      `}
    >
      {actionList.map(({ id, label, icon: Icon }) => (
        <div
          key={id}
          className='flex flex-col items-center justify-center gap-1 p-2 w-[90px]'
        >
          <Icon size={28} />
          <div className='text-[10px] text-center'>{label}</div>
        </div>
      ))}
    </div>
  );
}
